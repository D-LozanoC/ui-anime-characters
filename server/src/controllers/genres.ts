import type { NextFunction, Request, Response } from "express";
import type { GenresModelInterface } from "../types/interfaces.js";

export default class GenresController {
    #model: GenresModelInterface

    constructor({ model }: { model: GenresModelInterface }) {
        this.#model = model;
    }

    getAllGenres = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const genres = await this.#model.getAllGenres()
            res.status(200).json(genres).end()
        } catch (error) {
            next(error)
        }
    }
}