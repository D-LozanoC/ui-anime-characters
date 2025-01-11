"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const abilities_js_1 = __importDefault(require("../controllers/abilities.js"));
function createAbilitiesRouter(abilitiesModel) {
    const router = (0, express_1.Router)();
    const abilitiesController = new abilities_js_1.default({ model: abilitiesModel });
    router.get("/abilities", abilitiesController.getAllAbilities);
    return router;
}
exports.default = createAbilitiesRouter;
