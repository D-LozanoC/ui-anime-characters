import { Router } from "express";
import AnimeController from "../controllers/anime.ts";
import createCharacterRouter from "./characters.ts";
import { modelProps } from "../types/props.ts";

function createAnimeRouter({animeModel, characterModel}: modelProps): Router {
    const router = Router();
    
    const animeController = new AnimeController({model: animeModel})

    router.get("/animes", animeController.getAllAnimes)
    router.get('/animes/:animeId', animeController.getAnimeById)
    router.get('/animes/:animeTitle', animeController.getAnimeByTitle)
    router.post('/animes', animeController.createAnime)
    router.patch('/animes/:animeId', animeController.updateAnime)
    router.delete('/animes/:animeId', animeController.deleteAnime)

    router.use('/animes/:animeId', createCharacterRouter(characterModel))

    return router;
}

export default createAnimeRouter;