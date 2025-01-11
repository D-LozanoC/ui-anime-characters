"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_js_1 = __importDefault(require("../utils/connector.js"));
const queries_js_1 = require("../utils/queries.js");
class CharacterModel {
    async getAllCharacters(animeId, query) {
        return connector_js_1.default.character.findMany((0, queries_js_1.buildFindManyQuery)({ ...query, animeId }));
    }
    async getCharacterById(id) {
        return await connector_js_1.default.character.findUnique({ where: { id } });
    }
    async getCharacterByName(name) {
        return await connector_js_1.default.character.findUnique({ where: { name } });
    }
    async createCharacter(character) {
        return await connector_js_1.default.character.create({
            data: {
                ...character,
                abilities: {
                    connect: character.abilities.map((ability) => ({ name: ability }))
                }
            }
        });
    }
    async updateCharacter(character) {
        await connector_js_1.default.character.update({ where: { id: character.id }, data: character });
    }
    async updateCharacterAndAbilities(character, abilities) {
        console.log(character);
        await connector_js_1.default.character.update({
            where: {
                id: character.id
            },
            data: {
                ...character,
                abilities: {
                    set: abilities.map(ability => {
                        return { name: ability };
                    })
                }
            }
        });
    }
    async deleteCharacter(id) {
        await connector_js_1.default.character.delete({ where: { id } });
    }
}
exports.default = CharacterModel;
