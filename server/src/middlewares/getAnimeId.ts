import { NextFunction, Request, Response } from "express";

export default function (req: Request, _res: Response, next: NextFunction) {
    const animeId = req.baseUrl.replace('/api/animes/', '')
    req.body.animeId = animeId
    next()
}