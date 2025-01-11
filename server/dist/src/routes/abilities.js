import { Router } from "express";
import AbilitiesController from "../controllers/abilities.ts";
function createAbilitiesRouter(abilitiesModel) {
    const router = Router();
    const abilitiesController = new AbilitiesController({ model: abilitiesModel });
    router.get("/abilities", abilitiesController.getAllAbilities);
    return router;
}
export default createAbilitiesRouter;
