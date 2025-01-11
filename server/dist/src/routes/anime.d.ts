import { Router } from "express";
import { modelProps } from "../types/props.js";
declare function createAnimeRouter({ animeModel, characterModel }: Omit<modelProps, 'genreModel' | 'statusModel' | 'abilitiesModel'>): Router;
export default createAnimeRouter;
