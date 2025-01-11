import { AnimeModelInterface } from "../types/interfaces.js"
import prismaClient from "../utils/connector.js"
import { buildFindManyQuery } from "../utils/queries.js"
import { queryProps } from "../types/props.js"
import { Anime } from '../../prisma/generated/client'

export default class AnimeModel implements AnimeModelInterface {
    getAllAnimes(filters: queryProps): Promise<Anime[]> {
        return prismaClient.anime.findMany(buildFindManyQuery(filters))
    }

    getAnimeById(id: string): Promise<Anime | null> {
        return prismaClient.anime.findUnique({ where: { id }, include: { genres: true } })
    }

    getAnimeByTitle(title: string): Promise<Anime | null> {
        return prismaClient.anime.findUnique({ where: { title } })
    }

    async createAnime(anime: Omit<Anime, 'id'>, genres: string[]) {
        await prismaClient.anime.create({
            data: {
                ...anime,
                genres: {
                    connect: genres.map(genre => ({ name: genre }))
                }
            }
        })
    }

    async updateAnime(anime: Partial<Anime>): Promise<void> {
        await prismaClient.anime.update({ where: { id: anime.id }, data: { ...anime } })
    }

    async updateAnimeAndGenres(anime: Partial<Anime>, genres: string[]): Promise<void> {
        await prismaClient.anime.update({
            where: {
                id: anime.id
            },
            data: {
                ...anime,
                genres: {
                    set: genres.map(genre => {
                        return { name: genre }
                    })
                }
            }
        })
    }

    async deleteAnime(id: string) {
        await prismaClient.anime.delete({ where: { id } })
    }
}

