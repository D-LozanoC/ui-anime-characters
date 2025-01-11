import { Anime } from "@prisma/client";
import { AnimeModelInterface } from "../types/interfaces.ts";
import { queryProps } from "../types/props.ts";
export default class AnimeModel implements AnimeModelInterface {
    getAllAnimes(filters: queryProps): Promise<Anime[]>;
    getAnimeById(id: string): Promise<Anime | null>;
    getAnimeByTitle(title: string): Promise<Anime | null>;
    createAnime(anime: Omit<Anime, 'id'>, genres: string[]): Promise<void>;
    updateAnime(anime: Partial<Anime>): Promise<void>;
    updateAnimeAndGenres(anime: Partial<Anime>, genres: string[]): Promise<void>;
    deleteAnime(id: string): Promise<void>;
}
