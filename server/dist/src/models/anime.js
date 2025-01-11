import prismaClient from "../utils/connector.js";
import { buildFindManyQuery } from "../utils/queries.js";
export default class AnimeModel {
    getAllAnimes(filters) {
        return prismaClient.anime.findMany(buildFindManyQuery(filters));
    }
    getAnimeById(id) {
        return prismaClient.anime.findUnique({ where: { id }, include: { genres: true } });
    }
    getAnimeByTitle(title) {
        return prismaClient.anime.findUnique({ where: { title } });
    }
    async createAnime(anime, genres) {
        await prismaClient.anime.create({
            data: {
                ...anime,
                genres: {
                    connect: genres.map(genre => ({ name: genre }))
                }
            }
        });
    }
    async updateAnime(anime) {
        await prismaClient.anime.update({ where: { id: anime.id }, data: { ...anime } });
    }
    async updateAnimeAndGenres(anime, genres) {
        await prismaClient.anime.update({
            where: {
                id: anime.id
            },
            data: {
                ...anime,
                genres: {
                    set: genres.map(genre => {
                        return { name: genre };
                    })
                }
            }
        });
    }
    async deleteAnime(id) {
        await prismaClient.anime.delete({ where: { id } });
    }
}
