import { GenresModelInterface } from "../types/interfaces.js";
export default class GenresModel implements GenresModelInterface {
    getAllGenres(): Promise<string[] | null>;
}
