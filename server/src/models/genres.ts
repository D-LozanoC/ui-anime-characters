import { Genre } from "@prisma/client";
import { GenresModelInterface } from "../types/interfaces.ts";
import prismaClient from "../utils/connector.ts";

export default class GenresModel implements GenresModelInterface {
    async getAllGenres(): Promise<string[] | null> {
        const genres = await prismaClient.genre.findMany()
        return genres.map((genre: Genre) => genre.name) 
    }
}