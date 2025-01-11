import createApp from "./src/app.ts"
import AbilitiesModel from "./src/models/abilities.ts"
import AnimeModel from "./src/models/anime.ts"
import CharacterModel from "./src/models/characters.ts"
import GenresModel from "./src/models/genres.ts"
import StatusModel from "./src/models/status.ts"

const animeModel = new AnimeModel
const characterModel = new CharacterModel
const genreModel = new GenresModel
const abilitiesModel = new AbilitiesModel
const statusModel = new StatusModel

const app = createApp({animeModel, characterModel, genreModel, abilitiesModel, statusModel})

export default app