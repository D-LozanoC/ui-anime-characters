import { NextFunction, Request, Response } from "express";
import { AnimeModelInterface } from "../types/interfaces.ts";
import createCustomError from "../utils/customError.ts";
import { queryProps } from "../types/props.ts";
import {capitalizeWord, capitalizeWords} from "../utils/capitalizeWords.ts";
import { validateAnime } from "../validators/anime.ts";
import { Anime } from "@prisma/client";
import { Console } from "console";
import prismaClient from "../utils/connector.ts";

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
            pageSize: parseInt(req.query.pageSize as string)
        }

        res.status(201).json(await this.#model.getAllAnimes(filters))
    }

    getAnimeById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.animeId;
        const anime = await this.#model.getAnimeById(id)
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError',`No hay ningún anime con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }
        res.json(anime);
    };

    getAnimeByTitle = async (req: Request, res: Response, next: NextFunction) => {
        const title = req.params.animeTitle;
        console.log(title);
        
        const anime = await this.#model.getAnimeByTitle(capitalizeWord(title))
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError',`No hay ningún anime con el título: ${title}`)
            res.status(400)
            next(error)
            return
        }
        res.json(anime);
    };

    createAnime = async (req: Request, res: Response, next: NextFunction) => {
        const title = req.body.anime.title
        
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
        } = req.body.anime

        const newAnime: Anime = {
            id: crypto.randomUUID(),
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

        const validation = validateAnime(newAnime)

        if (!validation.success) {
            res.status(400)
            next(validation.error)
            return
        }

        this.#model.createAnime(newAnime, capitalizeWords(genres))
        res.status(201).json({ 
            message: "Anime created",
            anime: {...newAnime, genres}
         });
    };

    updateAnime = async (req: Request, res: Response, next: NextFunction) => {
        res.json({ message: "Anime updated" });
    };

    deleteAnime = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.animeId;
        const anime = await this.#model.getAnimeById(id)
        if (!anime) {
            const error = createCustomError('AnimeNotFoundError',`No hay ningún anime con el id: ${id}`)
            res.status(400)
            next(error)
            return
        }
        this.#model.deleteAnime(id)
        res.status(200).json({ message: "Anime deleted" })
    };
}