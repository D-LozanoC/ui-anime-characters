import { Character } from "@prisma/client";
import { CharacterModelInterface } from "../types/interfaces.js";
import { queryProps } from "../types/props.js";
export default class CharacterModel implements CharacterModelInterface {
    getAllCharacters(animeId: string, query: queryProps): Promise<Character[]>;
    getCharacterById(id: string): Promise<Character | null>;
    getCharacterByName(name: string): Promise<Character | null>;
    createCharacter(character: Omit<Character & {
        abilities: string[];
    }, 'id'>): Promise<{
        name: string;
        id: string;
        thumbnail: string;
        animeId: string;
        description: string;
        origin: string;
        birthDate: string;
        age: string;
        role: string;
        personality: string;
        background: string;
        bio: string;
    }>;
    updateCharacter(character: Character): Promise<void>;
    updateCharacterAndAbilities(character: Partial<Character>, abilities: string[]): Promise<void>;
    deleteCharacter(id: string): Promise<void>;
}
