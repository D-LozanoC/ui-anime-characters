import { NextFunction, Request, Response } from "express";
import { AnimeModelInterface } from "../types/interfaces.ts";
export default class AnimeController {
    #private;
    constructor({ model }: {
        model: AnimeModelInterface;
    });
    getAllAnimes: (req: Request, res: Response) => Promise<void>;
    getAnimeById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createAnime: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createAnimes: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateAnime: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteAnime: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
