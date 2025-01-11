import { Router } from "express";
import { AbilitiesModelInterface } from "../types/interfaces.js";
declare function createAbilitiesRouter(abilitiesModel: AbilitiesModelInterface): Router;
export default createAbilitiesRouter;
