import { Router } from "express";
import { CharacterModelInterface } from "../types/interfaces.js";
declare function createCharacterRouter(characterModel: CharacterModelInterface): Router;
export default createCharacterRouter;
