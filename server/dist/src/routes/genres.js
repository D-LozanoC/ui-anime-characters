import { Router } from "express";
import GenresController from "../controllers/genres.ts";
function createGenresRouter(genresModel) {
    const router = Router();
    const genresController = new GenresController({ model: genresModel });
    router.get("/genres", genresController.getAllGenres);
    return router;
}
export default createGenresRouter;
