import { Anime, Character } from "@prisma/client";
import { queryProps } from "./props.js";
import { Request } from "express";

export interface GenresModelInterface {
    getAllGenres(): Promise<string[] | null>;
}

export interface AbilitiesModelInterface {
    getAllAbilities(): Promise<string[] | null>;
}

export interface StatusModelInterface {
    getAllStatus(): Promise<string[] | null>;
}

export interface AnimeModelInterface {
    getAllAnimes(filters: queryProps): Promise<Anime[]> | Error;
    getAnimeById(id: string): Promise<Anime | null>;
    getAnimeByTitle(title: string): Promise<Anime | null>;
    createAnime(anime: Omit<Anime, 'id'>, genres: string[]): Promise<void>;
    updateAnime(anime: Partial<Anime>): Promise<void>;
    updateAnimeAndGenres(anime: Partial<Anime>, genres: string[]): Promise<void>;
    deleteAnime(id: string): void;
}

export interface CharacterModelInterface {
    getAllCharacters(animeId: string, filters: queryProps): Promise<Character[]>;
    getCharacterById(id: string): Promise<Character | null>;
    getCharacterByName(name: string): Promise<Character | null>;
    createCharacter(character: Omit<Character & { abilities: string[] }, 'id'>): Promise<Character | null>;
    updateCharacter(character: Partial<Character>): Promise<void>;
    updateCharacterAndAbilities(character: Partial<Character>, abilities: string[]): Promise<void>;
    deleteCharacter(id: string): Promise<void>;
}

export interface Query {
    where: {},
    orderBy: {},
    skip?: number,
    take?: number,
    include: {}
}

export interface RequestWithAnimeId extends Request {
    animeId: string
}