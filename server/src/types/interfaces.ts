import { Anime, Character } from "@prisma/client";
import { queryProps } from "./props.ts";


export interface AnimeModelInterface {
    getAllAnimes({genres, statusName, order, page, pageSize}: queryProps): Promise<Anime[]> | Error;
    getAnimeById(id: string): Promise<Anime | null>;
    getAnimeByTitle(title: string): Promise<Anime | null>;
    createAnime(anime: Anime, genres: string[]): void;
    updateAnime(id: string, anime: Anime): void;
    deleteAnime(id: string): void;
}

export interface CharacterModelInterface {
    getAllCharacters(animeId: string): Promise<Character[]>;
    getCharacterById(id: string): Promise<Character>;
    createCharacter(character: Character): Promise<void>;
    updateCharacter(character: Character): Promise<void>;
    deleteCharacter(id: string): Promise<void>;
}

export interface Query {
    where: {},
    orderBy: {},
    skip?: number,
    take?: number,
    include: {}
}