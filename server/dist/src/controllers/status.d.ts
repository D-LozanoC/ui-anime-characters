import { NextFunction, Request, Response } from "express";
import { StatusModelInterface } from "../types/interfaces.ts";
export default class StatusController {
    #private;
    constructor({ model }: {
        model: StatusModelInterface;
    });
    getAllStatus: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
}
