import { NextFunction, Request, Response } from "express";
import { AnimeModelInterface } from "../types/interfaces.ts";
import createCustomError from "../utils/customError.ts";
import { queryProps } from "../types/props.ts";
import { capitalizeWord, capitalizeWords } from "../utils/capitalizeWords.ts";
import { validateAnime, validatePartialAnime } from "../validators/anime.ts";
import { Anime } from "@prisma/client";

export default class AnimeController {
    #model

    constructor({ model }: { model: AnimeModelInterface }) {
        this.#model = model;
    }

    getAllAnimes = async (req: Request, res: Response) => {
        const filters: queryProps = {
            genres: req.query.genres ? capitalizeWords((req.query.genres as string).split(',') as string[]) : undefined,
            statusName: req.query.status ? capitalizeWord(req.query.status as string) : undefined,
            order: req.query.order as string,
            page: parseInt(req.query.page as string),
            pageSize: parseInt(req.query.pageSize as string),
            title: req.query.title ? capitalizeWord(req.query.title as string) : undefined
        }

        res.status(201).json(await this.#model.getAllAnimes(filters))
    }

    getAnimeById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.animeId;
        const anime = await this.#model.getAnimeById(id)
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }
        res.json(anime);
    };

    createAnime = async (req: Request, res: Response, next: NextFunction) => {
        if (req.body instanceof Array) {
            next()
            return
        }

        const title = req.body.title

        if (await this.#model.getAnimeByTitle(title)) {
            res.status(409)
            next(createCustomError('AnimeAlreadyExistsError', `Ya existe un anime con el título: ${title}`))
            return
        }

        const {
            thumbnail,
            synopsis,
            statusName,
            studio,
            director,
            releaseDate,
            episodeCount,
            durationPerEpisode,
            genres
        } = req.body

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
        }

        const animeGenres = {
            ...newAnime,
            genres: genres
        }

        const validation = validateAnime(animeGenres)

        if (!validation.success) {
            res.status(400)
            next(validation.error)
            return
        }

        this.#model.createAnime(newAnime, capitalizeWords(genres))
        res.status(201).json({
            message: "Anime created",
            data: { ...newAnime, genres }
        });
    };

    createAnimes = async (req: Request, res: Response, next: NextFunction) => {
        const animes: any[] = req.body

        animes.map(async anime => {
            if (await this.#model.getAnimeByTitle(anime.title)) {
                res.status(409)
                next(createCustomError('AnimeAlreadyExistsError', `Ya existe un anime con el título: ${anime.title}`))
                return
            }
        })

        const animesToCreate = animes.map((anime) => {
            const {
                title, thumbnail, synopsis, statusName, studio,
                director, releaseDate, episodeCount,
                durationPerEpisode, genres
            } = anime

            return {
                thumbnail, title, synopsis, director, durationPerEpisode,
                episodeCount, releaseDate, statusName, studio, genres
            }
        })

        const validations = animesToCreate.map(anime => validateAnime(anime))

        if (validations.some(validation =>{
            if (!validation.success) {
                next(validation.error)
                return true
            }
        })) return;

        const sanitizeAnimes = validations.map(validation => { if (validation.success) return this.#model.createAnime(validation.data, capitalizeWords(validation.data.genres)) })

        res.status(201).json({
            message: "Animes created",
            data: { sanitizeAnimes }
        });
    };

    updateAnime = async (req: Request, res: Response, next: NextFunction) => {
        const animeId = req.params.animeId
        const anime = await this.#model.getAnimeById(animeId)
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${animeId}`)
            res.status(400)
            next(error)
            return
        }

        const result = validatePartialAnime(req.body)
        if (!result.success) {
            res.status(400)
            next(result.error)
            return
        }

        const newAnime = {
            ...anime,
            ...result.data
        }

        if (newAnime.genres) {
            await this.#model.updateAnimeAndGenres(newAnime, capitalizeWords(newAnime.genres))
        } else {
            await this.#model.updateAnime(newAnime)
        }

        res.json({ message: "Anime updated", data: newAnime }).end();
    };

    deleteAnime = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.animeId;
        const anime = await this.#model.getAnimeById(id)
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError', `No hay ningún anime con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }

        this.#model.deleteAnime(id)

        res.status(200).json({ message: "Anime successfully deleted", data: anime }).end()
    };
}