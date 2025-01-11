import { NextFunction, Request, Response } from "express";
import { AbilitiesModelInterface } from "../types/interfaces.ts";
export default class AbilitiesController {
    #private;
    constructor({ model }: {
        model: AbilitiesModelInterface;
    });
    getAllAbilities: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
}
