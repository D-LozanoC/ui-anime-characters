import { Router } from "express";
import { GenresModelInterface } from "../types/interfaces.ts";
declare function createGenresRouter(genresModel: GenresModelInterface): Router;
export default createGenresRouter;
