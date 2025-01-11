import { NextFunction, Request, Response } from "express";
import { GenresModelInterface } from "../types/interfaces.ts";
export default class GenresController {
    #private;
    constructor({ model }: {
        model: GenresModelInterface;
    });
    getAllGenres: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
}
