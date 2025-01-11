import { Router } from "express";
import GenresController from "../controllers/genres.js";
import type { GenresModelInterface } from "../types/interfaces.js";

function createGenresRouter(genresModel: GenresModelInterface): Router {
    const router = Router();
    
    const genresController = new GenresController({ model: genresModel }) 

    router.get("/genres", genresController.getAllGenres)

    return router;
}

export default createGenresRouter;