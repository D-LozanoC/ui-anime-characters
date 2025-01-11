"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./src/app.js"));
const abilities_js_1 = __importDefault(require("./src/models/abilities.js"));
const anime_js_1 = __importDefault(require("./src/models/anime.js"));
const characters_js_1 = __importDefault(require("./src/models/characters.js"));
const genres_js_1 = __importDefault(require("./src/models/genres.js"));
const status_js_1 = __importDefault(require("./src/models/status.js"));
const animeModel = new anime_js_1.default;
const characterModel = new characters_js_1.default;
const genreModel = new genres_js_1.default;
const abilitiesModel = new abilities_js_1.default;
const statusModel = new status_js_1.default;
const app = (0, app_js_1.default)({ animeModel, characterModel, genreModel, abilitiesModel, statusModel });
exports.default = app;
