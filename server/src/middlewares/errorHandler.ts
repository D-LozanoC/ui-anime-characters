import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction)=> {
    if (err.name === 'ZodError') {             
        res.json(err)
    } else {
        res.json({error: {name: err.name, message: err.message}})
    }
}