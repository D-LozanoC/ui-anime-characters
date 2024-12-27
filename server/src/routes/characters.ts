import { Router } from "express";
import CharacterController from "../controllers/characters.ts";
import { CharacterModelInterface } from "../types/interfaces.ts";

function createCharacterRouter(characterModel: CharacterModelInterface): Router {
    const router = Router();
    
    const characterController = new CharacterController({model: characterModel});
    
    router.get("/character", characterController.getAllCharacters)
    router.get('/character/:id', characterController.getCharacterById)
    router.post('/character', characterController.createCharacter)
    router.patch('/character/:id', characterController.updateCharacter)
    router.delete('/character/:id', characterController.deleteCharacter)

    return router;
}

export default createCharacterRouter;