import type { NextFunction, Request, Response } from "express"
import { capitalizeWords } from "../utils/capitalizeWords.js";
import type { queryProps } from "../types/props.js";
import createCustomError from "../utils/customError.js";
import { validateCharacter, validatePartialCharacter } from "../validators/characters.js";
import type { CharacterModelInterface } from "../types/interfaces.js";
import prismaClient from "../utils/connector.js";
import type { Character } from '../../prisma/generated/client/index.js'
import type { SafeParseReturnType } from "zod";

export default class CharacterController {
    #model: CharacterModelInterface

    constructor({ model }: { model: CharacterModelInterface }) {
        this.#model = model;
    }

    getAllCharacters = async (req: Request, res: Response, next: NextFunction) => {
        const animeId = req.body?.animeId

        if (!animeId) {
            next(createCustomError('AnimeIdNotProvidedError', 'No se ha proporcionado un id de anime'))
            return
        }

        const filters: queryProps = {
            abilities: req.query.abilities ? capitalizeWords((req.query.abilities as string).split(',') as string[]) : undefined,
            order: req.query.order as string,
            page: parseInt(req.query.page as string),
            pageSize: parseInt(req.query.pageSize as string),
            name: req.query.name as string,
        }

        res.status(201).json(await this.#model.getAllCharacters(animeId, filters))
    }

    getCharacterById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        let anime
        if (id)
            anime = await this.#model.getCharacterById(id)
        if (!anime) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún Personaje con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }
        res.json(anime);
    }

    createCharacter = async (req: Request, res: Response, next: NextFunction) => {
        if (req.body instanceof Array) {
            next()
            return
        }
        const name = req.body.name

        const animeId = req.body.animeId

        if (
            !await prismaClient.anime.findUniqueOrThrow({ where: { id: animeId } })
                .catch(() => next(createCustomError('AnimeNotFoundError', 'No se ha encontrado el anime')))
        ) {
            res.status(400).end()
            return
        }

        if (await this.#model.getCharacterByName(name)) {
            res.status(409)
            next(createCustomError('CharacterAlreadyExistsError', `Ya existe un personaje con el nombre: ${name}`))
            return
        }

        const validation = validateCharacter(req.body)

        if (!validation.success) {
            res.status(400)
            next(validation.error)
            return
        }

        const createdCharacter = await this.#model.createCharacter(validation.data)

        if (!createdCharacter) {
            res.status(500).end()
            next(createCustomError('CharacterCreationError', 'Ha ocurrido un error al crear el personaje'))
            return
        }

        res.status(201).json({
            message: "Anime created",
            anime: { ...validation.data }
        }).end()
    }

    createCharacters = async (req: Request, res: Response, next: NextFunction) => {
        const characters = req.body
        const animeId = req.body.animeId

        if (
            !await prismaClient.anime.findUniqueOrThrow({ where: { id: animeId } })
                .catch(() => next(createCustomError('AnimeNotFoundError', 'No se ha encontrado el anime')))
        ) {
            res.status(400).end()
            return
        }

        const charactersToCreate = characters.map((character: any) => {
            const {
                name, description, origin, birthDate, age, role,
                thumbnail, personality, background, bio, abilities
            } = character

            return {
                animeId, name, description, origin, birthDate, age, role,
                thumbnail, personality, background, bio, abilities
            }
        })

        const validations: SafeParseReturnType<Omit<Character & { abilities: string[] }, 'id'>, Omit<Character & { abilities: string[] }, 'id'>>[] = charactersToCreate.map((character: any) => validateCharacter(character))

        validations.forEach(async validation => {
            if (validation.success) {
                return await this.#model.createCharacter(validation.data)
            } else {
                next(validation.error)
                return {}
            }
        })

        res.status(201).json({
            message: "Anime created",
            data: validations.map(validation => validation.data)
        }).end()
    }

    updateCharacter = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        let character
        if (id)
            character = await this.#model.getCharacterById(id)
        if (!character) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún personaje con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }

        const result = validatePartialCharacter(req.body)
        if (!result.success) {
            res.status(400)
            next(result.error)
            return
        }

        const newCharacter = {
            ...character,
            ...result.data
        }

        if (newCharacter.abilities) {
            await this.#model.updateCharacterAndAbilities(newCharacter, capitalizeWords(newCharacter.abilities))
        } else {
            await this.#model.updateCharacter(newCharacter)
        }

        res.json({ message: "Character updated", data: newCharacter }).end();
    }

    deleteCharacter = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        let character
        if (id)
            character = await this.#model.getCharacterById(id)
        if (!character) {
            const error = createCustomError('CharacterNotFoundError', `No hay ningún personaje con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }
        if (id)
            await this.#model.deleteCharacter(id)

        res.status(204).json({ message: "Anime successfully deleted", data: character }).end();
    }
}