import createApp from "./src/app.js"
import AbilitiesModel from "./src/models/abilities.js"
import AnimeModel from "./src/models/anime.js"
import CharacterModel from "./src/models/characters.js"
import GenresModel from "./src/models/genres.js"
import StatusModel from "./src/models/status.js"

const animeModel = new AnimeModel
const characterModel = new CharacterModel
const genreModel = new GenresModel
const abilitiesModel = new AbilitiesModel
const statusModel = new StatusModel

const app = createApp({animeModel, characterModel, genreModel, abilitiesModel, statusModel})

export default app