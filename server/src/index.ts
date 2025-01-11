import createApp from "./app.js"
import AbilitiesModel from "./models/abilities.js"
import AnimeModel from "./models/anime.js"
import CharacterModel from "./models/characters.js"
import GenresModel from "./models/genres.js"
import StatusModel from "./models/status.js"

const animeModel = new AnimeModel
const characterModel = new CharacterModel
const genreModel = new GenresModel
const abilitiesModel = new AbilitiesModel
const statusModel = new StatusModel

const app = createApp({animeModel, characterModel, genreModel, abilitiesModel, statusModel})

export default app