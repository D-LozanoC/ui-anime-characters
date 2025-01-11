import { Router } from "express";
import { CharacterModelInterface } from "../types/interfaces.ts";
declare function createCharacterRouter(characterModel: CharacterModelInterface): Router;
export default createCharacterRouter;
