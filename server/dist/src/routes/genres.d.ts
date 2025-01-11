import { Router } from "express";
import { GenresModelInterface } from "../types/interfaces.js";
declare function createGenresRouter(genresModel: GenresModelInterface): Router;
export default createGenresRouter;
