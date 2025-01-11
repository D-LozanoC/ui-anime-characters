import { Router } from "express";
import type { AbilitiesModelInterface } from "../types/interfaces.js";
import AbilitiesController from "../controllers/abilities.js";

function createAbilitiesRouter(abilitiesModel: AbilitiesModelInterface): Router {
    const router = Router();
    
    const abilitiesController = new AbilitiesController({ model: abilitiesModel }) 

    router.get("/abilities", abilitiesController.getAllAbilities)

    return router;
}

export default createAbilitiesRouter;