import { Anime } from "@prisma/client"
import { AnimeModelInterface } from "../types/interfaces.ts"
import prismaClient from "../utils/connector.ts"
import { buildFindManyQuery } from "../utils/queries.ts"
import { queryProps } from "../types/props.ts"

export default class AnimeModel implements AnimeModelInterface {
    async getAllAnimes({ genres, statusName, order, page, pageSize }: queryProps): Promise<Anime[]> {
        return await prismaClient.anime.findMany(buildFindManyQuery({ genres, statusName, order, page, pageSize }))
    }

    async getAnimeById(id: string): Promise<Anime | null> {
        return await prismaClient.anime.findUnique({
            where: {
                id
            }
        })
    }

    async getAnimeByTitle(title: string): Promise<Anime | null> {
        return await prismaClient.anime.findUnique({
            where: {
                title
            }
        })
    }

    async createAnime(anime: Anime, genres: string[]) {     
        await prismaClient.anime.create({
            data: {
                ...anime,
                genres: {
                    connect: genres.map(genre => {
                        return { name: genre }
                    })
                }
            }
        })
    }

    async updateAnime(id: string, anime: Anime) {
        await prismaClient.anime.update({
            where: {
                id
            },
            data: {
                ...anime
            }
        })
    }

    async deleteAnime(id: string) {
        await prismaClient.anime.delete({
            where: {
                id
            }
        })
    }
}

