"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_js_1 = __importDefault(require("../utils/connector.js"));
const queries_js_1 = require("../utils/queries.js");
class AnimeModel {
    getAllAnimes(filters) {
        return connector_js_1.default.anime.findMany((0, queries_js_1.buildFindManyQuery)(filters));
    }
    getAnimeById(id) {
        return connector_js_1.default.anime.findUnique({ where: { id }, include: { genres: true } });
    }
    getAnimeByTitle(title) {
        return connector_js_1.default.anime.findUnique({ where: { title } });
    }
    async createAnime(anime, genres) {
        await connector_js_1.default.anime.create({
            data: {
                ...anime,
                genres: {
                    connect: genres.map(genre => ({ name: genre }))
                }
            }
        });
    }
    async updateAnime(anime) {
        await connector_js_1.default.anime.update({ where: { id: anime.id }, data: { ...anime } });
    }
    async updateAnimeAndGenres(anime, genres) {
        await connector_js_1.default.anime.update({
            where: {
                id: anime.id
            },
            data: {
                ...anime,
                genres: {
                    set: genres.map(genre => {
                        return { name: genre };
                    })
                }
            }
        });
    }
    async deleteAnime(id) {
        await connector_js_1.default.anime.delete({ where: { id } });
    }
}
exports.default = AnimeModel;
