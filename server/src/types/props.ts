import { AnimeModelInterface, CharacterModelInterface } from "./interfaces.ts";

export type modelProps = {
    animeModel: AnimeModelInterface,
    characterModel: CharacterModelInterface,
}

export type queryProps = {
    genres?: string[],
    statusName?: string,
    order?: string,
    page?: number,
    pageSize?: number
}