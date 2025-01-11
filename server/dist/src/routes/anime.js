"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anime_js_1 = __importDefault(require("../controllers/anime.js"));
const characters_js_1 = __importDefault(require("./characters.js"));
function createAnimeRouter({ animeModel, characterModel }) {
    const router = (0, express_1.Router)();
    const animeController = new anime_js_1.default({ model: animeModel });
    router.get("/animes", animeController.getAllAnimes);
    router.get('/animes/:animeId', animeController.getAnimeById);
    router.post('/animes', animeController.createAnime, animeController.createAnimes);
    router.patch('/animes/:animeId', animeController.updateAnime);
    router.delete('/animes/:animeId', animeController.deleteAnime);
    router.use('/animes/:animeId', (0, characters_js_1.default)(characterModel));
    return router;
}
exports.default = createAnimeRouter;
