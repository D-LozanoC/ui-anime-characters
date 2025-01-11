import prismaClient from "../utils/connector.js";
export default class GenresModel {
    async getAllGenres() {
        const genres = await prismaClient.genre.findMany();
        return genres.map((genre) => genre.name);
    }
}
