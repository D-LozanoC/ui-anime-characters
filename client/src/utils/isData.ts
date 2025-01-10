import { Anime } from "@/types/anime";
import { Character } from "@/types/character";

export function isArrayString(array: any): array is string[] {
    return Array.isArray(array) && array.every(item => typeof item === "string")
}

export function isArrayObject(array: any): array is {name: string, description: string}[] {
    return Array.isArray(array) && array.every(item => typeof item === "object")
}

export function isAnime(obj: any): obj is Anime {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.thumbnail === 'string' &&
        typeof obj.title === 'string' &&
        typeof obj.synopsis === 'string' &&
        typeof obj.statusName === 'string' &&
        typeof obj.studio === 'string' &&
        typeof obj.director === 'string' &&
        typeof obj.releaseDate === 'string' &&
        typeof obj.episodeCount === 'string' &&
        typeof obj.durationPerEpisode === 'string' &&
        isArrayString(obj.genres)
    )
}

export function isCharacter(obj: any): obj is Character {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.animeId === 'string' &&
        typeof obj.thumbnail === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.origin === 'string' &&
        typeof obj.description === 'string' &&
        typeof obj.bio === 'string' &&
        typeof obj.background === 'string' &&
        typeof obj.birthDate === 'string' &&
        typeof obj.role === 'string' &&
        typeof obj.personality === 'string' &&
        typeof obj.age === 'string' &&
        (
            isArrayObject(obj.abilities) ||
            isArrayString(obj.abilities)
        )
    )

}