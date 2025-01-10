import { Router } from "express";
import GenresController from "../controllers/genres.ts";
import { GenresModelInterface } from "../types/interfaces.ts";

function createGenresRouter(genresModel: GenresModelInterface): Router {
    const router = Router();
    
    const genresController = new GenresController({ model: genresModel }) 

    router.get("/genres", genresController.getAllGenres)

    return router;
}

export default createGenresRouter;