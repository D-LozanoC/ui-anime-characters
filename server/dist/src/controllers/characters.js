import { capitalizeWords } from "../utils/capitalizeWords.ts";
import createCustomError from "../utils/customError.ts";
import { validateCharacter, validatePartialCharacter } from "../validators/characters.ts";
import prismaClient from "../utils/connector.ts";
export default class CharacterController {
    #model;
    constructor({ model }) {
        this.#model = model;
    }
    getAllCharacters = async (req, res, next) => {
        const animeId = req.body?.animeId;
        if (!animeId) {
            next(createCustomError('AnimeIdNotProvidedError', 'No se ha proporcionado un id de anime'));
            return;
        }
        const filters = {
            abilities: req.query.abilities ? capitalizeWords(req.query.abilities.split(',')) : undefined,
            order: req.query.order,
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            name: req.query.name,
        };
        res.status(201).json(await this.#model.getAllCharacters(animeId, filters));
    };
    getCharacterById = async (req, res, next) => {
        const id = req.params.id;
        const anime = await this.#model.getCharacterById(id);
        if (!anime) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún Personaje con el id: ${id}`);
            res.status(400);
            next(error);
            return;
        }
        res.json(anime);
    };
    createCharacter = async (req, res, next) => {
        if (req.body instanceof Array) {
            next();
            return;
        }
        const name = req.body.name;
        const animeId = req.body.animeId;
        if (!await prismaClient.anime.findUniqueOrThrow({ where: { id: animeId } })
            .catch(() => next(createCustomError('AnimeNotFoundError', 'No se ha encontrado el anime')))) {
            res.status(400).end();
            return;
        }
        if (await this.#model.getCharacterByName(name)) {
            res.status(409);
            next(createCustomError('CharacterAlreadyExistsError', `Ya existe un personaje con el nombre: ${name}`));
            return;
        }
        const validation = validateCharacter(req.body);
        if (!validation.success) {
            res.status(400);
            next(validation.error);
            return;
        }
        const createdCharacter = await this.#model.createCharacter(validation.data);
        if (!createdCharacter) {
            res.status(500).end();
            next(createCustomError('CharacterCreationError', 'Ha ocurrido un error al crear el personaje'));
            return;
        }
        res.status(201).json({
            message: "Anime created",
            anime: { ...validation.data }
        }).end();
    };
    createCharacters = async (req, res, next) => {
        const characters = req.body;
        const animeId = req.body.animeId;
        if (!await prismaClient.anime.findUniqueOrThrow({ where: { id: animeId } })
            .catch(() => next(createCustomError('AnimeNotFoundError', 'No se ha encontrado el anime')))) {
            res.status(400).end();
            return;
        }
        const charactersToCreate = characters.map((character) => {
            const { name, description, origin, birthDate, age, role, thumbnail, personality, background, bio, abilities } = character;
            return {
                animeId, name, description, origin, birthDate, age, role,
                thumbnail, personality, background, bio, abilities
            };
        });
        const validations = charactersToCreate.map((character) => validateCharacter(character));
        validations.forEach(async (validation) => {
            if (validation.success) {
                return await this.#model.createCharacter(validation.data);
            }
            else {
                next(validation.error);
                return {};
            }
        });
        res.status(201).json({
            message: "Anime created",
            data: validations.map(validation => validation.data)
        }).end();
    };
    updateCharacter = async (req, res, next) => {
        const id = req.params.id;
        const character = await this.#model.getCharacterById(id);
        if (!character) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún personaje con el id: ${id}`);
            res.status(400);
            next(error);
            return;
        }
        const result = validatePartialCharacter(req.body);
        if (!result.success) {
            res.status(400);
            next(result.error);
            return;
        }
        const newCharacter = {
            ...character,
            ...result.data
        };
        if (newCharacter.abilities) {
            await this.#model.updateCharacterAndAbilities(newCharacter, capitalizeWords(newCharacter.abilities));
        }
        else {
            await this.#model.updateCharacter(newCharacter);
        }
        res.json({ message: "Character updated", data: newCharacter }).end();
    };
    deleteCharacter = async (req, res, next) => {
        const id = req.params.id;
        const character = await this.#model.getCharacterById(id);
        if (!character) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún personaje con el id: ${id}`);
            res.status(400);
            next(error);
            return;
        }
        await this.#model.deleteCharacter(id);
        res.status(204).json({ message: "Anime successfully deleted", data: character }).end();
    };
}
