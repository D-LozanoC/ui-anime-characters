import { AbilitiesModelInterface, AnimeModelInterface, CharacterModelInterface, GenresModelInterface, StatusModelInterface } from "./interfaces.js";

export type modelProps = {
    animeModel: AnimeModelInterface,
    characterModel: CharacterModelInterface,
    genreModel: GenresModelInterface,
    abilitiesModel: AbilitiesModelInterface,
    statusModel: StatusModelInterface
}

export type queryProps = {
    genres?: string[],
    statusName?: string,
    order?: string,
    page?: number,
    pageSize?: number,
    animeId?: string,
    abilities?: string[],
    title?: string,
    name?: string
}