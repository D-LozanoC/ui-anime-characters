import { GenresModelInterface } from "../types/interfaces.ts";
export default class GenresModel implements GenresModelInterface {
    getAllGenres(): Promise<string[] | null>;
}
