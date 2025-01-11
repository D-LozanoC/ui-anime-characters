import { errorHandler } from "./middlewares/errorHandler.js"
import AbilitiesModel from "./models/abilities.js"
import AnimeModel from "./models/anime.js"
import CharacterModel from "./models/characters.js"
import GenresModel from "./models/genres.js"
import StatusModel from "./models/status.js"
import createAbilitiesRouter from "./routes/abilities.js"
import createAnimeRouter from "./routes/anime.js"
import createGenresRouter from "./routes/genres.js"
import createStatusRouter from "./routes/status.js"
import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

const animeModel = new AnimeModel
const characterModel = new CharacterModel
const genreModel = new GenresModel
const abilitiesModel = new AbilitiesModel
const statusModel = new StatusModel

app.use(express.json())
app.use(express.static(`${process.cwd()}/public`))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (_req: Request, res: Response) => {
    res.sendFile(`${process.cwd()}/public/html/index.html`)
})

app.get('/docs', (_req: Request, res: Response) => {
    res.sendFile(`${process.cwd()}/public/html/docs.html`)
})

app.get('/api', (_req: Request, res: Response) => {
    res.json({ message: "API de animes" });
})

app.use('/api', createGenresRouter(genreModel))
app.use('/api', createAbilitiesRouter(abilitiesModel))
app.use('/api', createStatusRouter(statusModel))
app.use('/api', createAnimeRouter({ animeModel, characterModel }))
app.use((_req: Request, res: Response) => {
    res.status(404).sendFile(`${process.cwd()}/public/html/404.html`)
})
app.use(errorHandler)

export default app