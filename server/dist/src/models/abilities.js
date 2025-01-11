"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_js_1 = __importDefault(require("../utils/connector.js"));
class AbilitiesModel {
    async getAllAbilities() {
        const abilities = await connector_js_1.default.abilities.findMany();
        return abilities.map((ability) => ability.name);
    }
}
exports.default = AbilitiesModel;
