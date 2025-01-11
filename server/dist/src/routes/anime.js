import { Router } from "express";
import AnimeController from "../controllers/anime.js";
import createCharacterRouter from "./characters.js";
function createAnimeRouter({ animeModel, characterModel }) {
    const router = Router();
    const animeController = new AnimeController({ model: animeModel });
    router.get("/animes", animeController.getAllAnimes);
    router.get('/animes/:animeId', animeController.getAnimeById);
    router.post('/animes', animeController.createAnime, animeController.createAnimes);
    router.patch('/animes/:animeId', animeController.updateAnime);
    router.delete('/animes/:animeId', animeController.deleteAnime);
    router.use('/animes/:animeId', createCharacterRouter(characterModel));
    return router;
}
export default createAnimeRouter;
