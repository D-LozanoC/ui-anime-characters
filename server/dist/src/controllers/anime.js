import createCustomError from "../utils/customError.js";
import { capitalizeWord, capitalizeWords } from "../utils/capitalizeWords.js";
import { validateAnime, validatePartialAnime } from "../validators/anime.js";
export default class AnimeController {
    #model;
    constructor({ model }) {
        this.#model = model;
    }
    getAllAnimes = async (req, res) => {
        const filters = {
            genres: req.query.genres ? capitalizeWords(req.query.genres.split(',')) : undefined,
            statusName: req.query.status ? capitalizeWord(req.query.status) : undefined,
            order: req.query.order,
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            title: req.query.title ? capitalizeWord(req.query.title) : undefined
        };
        res.status(201).json(await this.#model.getAllAnimes(filters));
    };
    getAnimeById = async (req, res, next) => {
        const id = req.params.animeId;
        let anime;
        if (id) {
            anime = await this.#model.getAnimeById(id);
        }
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${id}`);
            res.status(400);
            next(error);
            return;
        }
        res.json(anime);
    };
    createAnime = async (req, res, next) => {
        if (req.body instanceof Array) {
            next();
            return;
        }
        const title = req.body.title;
        if (await this.#model.getAnimeByTitle(title)) {
            res.status(409);
            next(createCustomError('AnimeAlreadyExistsError', `Ya existe un anime con el título: ${title}`));
            return;
        }
        const { thumbnail, synopsis, statusName, studio, director, releaseDate, episodeCount, durationPerEpisode, genres } = req.body;
        const newAnime = {
            thumbnail,
            title,
            synopsis,
            director,
            durationPerEpisode,
            episodeCount,
            releaseDate,
            statusName,
            studio
        };
        const animeGenres = {
            ...newAnime,
            genres: genres
        };
        const validation = validateAnime(animeGenres);
        if (!validation.success) {
            res.status(400);
            next(validation.error);
            return;
        }
        this.#model.createAnime(newAnime, capitalizeWords(genres));
        res.status(201).json({
            message: "Anime created",
            data: { ...newAnime, genres }
        });
    };
    createAnimes = async (req, res, next) => {
        const animes = req.body;
        animes.map(async (anime) => {
            if (await this.#model.getAnimeByTitle(anime.title)) {
                res.status(409);
                next(createCustomError('AnimeAlreadyExistsError', `Ya existe un anime con el título: ${anime.title}`));
                return;
            }
        });
        const animesToCreate = animes.map((anime) => {
            const { title, thumbnail, synopsis, statusName, studio, director, releaseDate, episodeCount, durationPerEpisode, genres } = anime;
            return {
                thumbnail, title, synopsis, director, durationPerEpisode,
                episodeCount, releaseDate, statusName, studio, genres
            };
        });
        const validations = animesToCreate.map(anime => validateAnime(anime));
        if (validations.some(validation => {
            if (!validation.success) {
                next(validation.error);
                return true;
            }
        }))
            return;
        const sanitizeAnimes = validations.map(validation => { if (validation.success)
            return this.#model.createAnime(validation.data, capitalizeWords(validation.data.genres)); });
        res.status(201).json({
            message: "Animes created",
            data: { sanitizeAnimes }
        });
    };
    updateAnime = async (req, res, next) => {
        const animeId = req.params.animeId;
        let anime;
        if (animeId) {
            anime = await this.#model.getAnimeById(animeId);
        }
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${animeId}`);
            res.status(400);
            next(error);
            return;
        }
        const result = validatePartialAnime(req.body);
        if (!result.success) {
            res.status(400);
            next(result.error);
            return;
        }
        const newAnime = {
            ...anime,
            ...result.data
        };
        if (newAnime.genres) {
            await this.#model.updateAnimeAndGenres(newAnime, capitalizeWords(newAnime.genres));
        }
        else {
            await this.#model.updateAnime(newAnime);
        }
        res.json({ message: "Anime updated", data: newAnime }).end();
    };
    deleteAnime = async (req, res, next) => {
        const id = req.params.animeId;
        let anime;
        if (id) {
            anime = await this.#model.getAnimeById(id);
        }
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${id}`);
            res.status(400);
            next(error);
            return;
        }
        if (id) {
            this.#model.deleteAnime(id);
        }
        res.status(200).json({ message: "Anime successfully deleted", data: anime }).end();
    };
}
