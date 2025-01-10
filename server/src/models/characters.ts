import { Character } from "@prisma/client"
import { CharacterModelInterface } from "../types/interfaces.ts"
import { queryProps } from "../types/props.ts"
import prismaClient from "../utils/connector.ts"
import { buildFindManyQuery } from "../utils/queries.ts"

export default class CharacterModel implements CharacterModelInterface {
    async getAllCharacters(animeId: string, query: queryProps): Promise<Character[]> {
        return prismaClient.character.findMany(buildFindManyQuery({ ...query, animeId }))
    }

    async getCharacterById(id: string): Promise<Character | null> {
        return await prismaClient.character.findUnique({ where: { id } })
    }

    async getCharacterByName(name: string): Promise<Character | null> {
        return await prismaClient.character.findUnique({ where: { name } })
    }

    async createCharacter(character: Omit<Character & { abilities: string[] }, 'id'>) {
        return await prismaClient.character.create({
            data: {
                ...character,
                abilities: {
                    connect: character.abilities.map((ability) => ({ name: ability }))
                }
            }
        })

    }

    async updateCharacter(character: Character) {
        await prismaClient.character.update({ where: { id: character.id }, data: character })
    }

    async updateCharacterAndAbilities(character: Partial<Character>, abilities: string[]): Promise<void> {
        console.log(character);
        
        await prismaClient.character.update({
            where: {
                id: character.id
            },
            data: {
                ...character,
                abilities: {
                    set: abilities.map(genre => {
                        return { name: genre }
                    })
                }
            }
        })
    }

    async deleteCharacter(id: string) {
        await prismaClient.character.delete({ where: { id } })
    }
}