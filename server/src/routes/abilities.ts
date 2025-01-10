import { Router } from "express";
import { AbilitiesModelInterface } from "../types/interfaces.ts";
import AbilitiesController from "../controllers/abilities.ts";

function createAbilitiesRouter(abilitiesModel: AbilitiesModelInterface): Router {
    const router = Router();
    
    const abilitiesController = new AbilitiesController({ model: abilitiesModel }) 

    router.get("/abilities", abilitiesController.getAllAbilities)

    return router;
}

export default createAbilitiesRouter;