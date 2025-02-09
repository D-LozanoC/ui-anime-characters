import type { Genre } from '../../prisma/generated/client/index.js'
import type { GenresModelInterface } from "../types/interfaces.js";
import prismaClient from "../utils/connector.js";

export default class GenresModel implements GenresModelInterface {
    async getAllGenres(): Promise<string[] | null> {
        const genres = await prismaClient.genre.findMany()
        return genres.map((genre: Genre) => genre.name) 
    }
}