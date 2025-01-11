import { NextFunction, Request, Response } from "express";
import { StatusModelInterface } from "../types/interfaces.js";

export default class StatusController {
    #model: StatusModelInterface

    constructor({ model }: { model: StatusModelInterface }) {
        this.#model = model;
    }

    getAllStatus = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const status = await this.#model.getAllStatus()
            res.status(200).json(status).end()
        } catch (error) {
            next(error)
        }
    }
}