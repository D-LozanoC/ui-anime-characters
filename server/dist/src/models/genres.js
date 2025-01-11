"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_js_1 = __importDefault(require("../utils/connector.js"));
class GenresModel {
    async getAllGenres() {
        const genres = await connector_js_1.default.genre.findMany();
        return genres.map((genre) => genre.name);
    }
}
exports.default = GenresModel;
