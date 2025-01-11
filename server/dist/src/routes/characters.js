import { Router } from "express";
import CharacterController from "../controllers/characters.ts";
import getAnimeId from "../middlewares/getAnimeId.ts";
function createCharacterRouter(characterModel) {
    const router = Router();
    const characterController = new CharacterController({ model: characterModel });
    router.get("/characters", getAnimeId, characterController.getAllCharacters);
    router.get('/characters/:id', characterController.getCharacterById);
    router.post('/characters', getAnimeId, characterController.createCharacter, characterController.createCharacters);
    router.patch('/characters/:id', characterController.updateCharacter);
    router.delete('/characters/:id', characterController.deleteCharacter);
    return router;
}
export default createCharacterRouter;
