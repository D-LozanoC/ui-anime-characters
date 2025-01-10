import createApp from "./app.ts"
import AbilitiesModel from "./models/abilities.ts"
import AnimeModel from "./models/anime.ts"
import CharacterModel from "./models/characters.ts"
import GenresModel from "./models/genres.ts"
import StatusModel from "./models/status.ts"

const animeModel = new AnimeModel
const characterModel = new CharacterModel
const genreModel = new GenresModel
const abilitiesModel = new AbilitiesModel
const statusModel = new StatusModel

createApp({animeModel, characterModel, genreModel, abilitiesModel, statusModel})