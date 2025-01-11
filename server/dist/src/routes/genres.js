"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genres_js_1 = __importDefault(require("../controllers/genres.js"));
function createGenresRouter(genresModel) {
    const router = (0, express_1.Router)();
    const genresController = new genres_js_1.default({ model: genresModel });
    router.get("/genres", genresController.getAllGenres);
    return router;
}
exports.default = createGenresRouter;
