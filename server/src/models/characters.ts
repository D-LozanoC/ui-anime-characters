import AnimeCharacter from "../types/characters.ts"
import { CharacterModelInterface } from "../types/interfaces.ts"

export default class CharacterModel implements CharacterModelInterface {
    async getAllCharacters(animeId: string): Promise<AnimeCharacter[]> {
        const characters: AnimeCharacter[] = []
        return characters
    }

    async getCharacterById(id: string): Promise<AnimeCharacter> {
        const character: AnimeCharacter = {
            id: crypto.randomUUID(),
            basicInfo: {
                name: "Test Character",
                description: 'Test Character',
                origin: "Test Origin"
            },
            advancedInfo: {
            },
            thumbnail: "https://example.com/thumbnail.jpg",
            lifeInfo:{}
        }

        return character
    }

    async createCharacter(character: AnimeCharacter) {

    }

    async updateCharacter(character: AnimeCharacter) {

    }

    async deleteCharacter(id: string) {

    }
}