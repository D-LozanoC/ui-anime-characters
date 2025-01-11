import type { NextFunction, Request, Response } from "express";
import type { AbilitiesModelInterface } from "../types/interfaces.js";

export default class AbilitiesController {
    #model: AbilitiesModelInterface

    constructor({ model }: { model: AbilitiesModelInterface }) {
        this.#model = model;
    }

    getAllAbilities = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const abilities = await this.#model.getAllAbilities()
            res.status(200).json(abilities).end()
        } catch (error) {
            next(error)
        }
    }
}