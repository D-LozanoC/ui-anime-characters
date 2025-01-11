import { Router } from "express";
import { AbilitiesModelInterface } from "../types/interfaces.ts";
declare function createAbilitiesRouter(abilitiesModel: AbilitiesModelInterface): Router;
export default createAbilitiesRouter;
