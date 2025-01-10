import { Router } from "express";
import AnimeController from "../controllers/anime.ts";
import createCharacterRouter from "./characters.ts";
import { modelProps } from "../types/props.ts";

function createAnimeRouter({animeModel, characterModel}: Omit<modelProps, 'genreModel' | 'statusModel' | 'abilitiesModel'>): Router {
    const router = Router();
    
    const animeController = new AnimeController({model: animeModel})

    router.get("/animes", animeController.getAllAnimes)
    router.get('/animes/:animeId', animeController.getAnimeById)
    router.post('/animes', animeController.createAnime, animeController.createAnimes)
    router.patch('/animes/:animeId', animeController.updateAnime)
    router.delete('/animes/:animeId', animeController.deleteAnime)

    router.use('/animes/:animeId', createCharacterRouter(characterModel))

    return router;
}

export default createAnimeRouter;