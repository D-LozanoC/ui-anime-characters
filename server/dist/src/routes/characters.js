"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characters_js_1 = __importDefault(require("../controllers/characters.js"));
const getAnimeId_js_1 = __importDefault(require("../middlewares/getAnimeId.js"));
function createCharacterRouter(characterModel) {
    const router = (0, express_1.Router)();
    const characterController = new characters_js_1.default({ model: characterModel });
    router.get("/characters", getAnimeId_js_1.default, characterController.getAllCharacters);
    router.get('/characters/:id', characterController.getCharacterById);
    router.post('/characters', getAnimeId_js_1.default, characterController.createCharacter, characterController.createCharacters);
    router.patch('/characters/:id', characterController.updateCharacter);
    router.delete('/characters/:id', characterController.deleteCharacter);
    return router;
}
exports.default = createCharacterRouter;
