import prismaClient from "../utils/connector.js";
import { buildFindManyQuery } from "../utils/queries.js";
export default class CharacterModel {
    async getAllCharacters(animeId, query) {
        return prismaClient.character.findMany(buildFindManyQuery({ ...query, animeId }));
    }
    async getCharacterById(id) {
        return await prismaClient.character.findUnique({ where: { id } });
    }
    async getCharacterByName(name) {
        return await prismaClient.character.findUnique({ where: { name } });
    }
    async createCharacter(character) {
        return await prismaClient.character.create({
            data: {
                ...character,
                abilities: {
                    connect: character.abilities.map((ability) => ({ name: ability }))
                }
            }
        });
    }
    async updateCharacter(character) {
        await prismaClient.character.update({ where: { id: character.id }, data: character });
    }
    async updateCharacterAndAbilities(character, abilities) {
        console.log(character);
        await prismaClient.character.update({
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
        await prismaClient.character.delete({ where: { id } });
    }
}
