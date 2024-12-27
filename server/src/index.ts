import createApp from "./app.ts"
import AnimeModel from "./models/anime.ts"
import CharacterModel from "./models/characters.ts"

const animeModel = new AnimeModel
const characterModel = new CharacterModel

createApp({animeModel, characterModel})