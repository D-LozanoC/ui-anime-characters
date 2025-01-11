import express, { type Application, type Request, type Response } from 'express'
import morgan from 'morgan'
import createAnimeRouter from './routes/anime.js'
import createGenresRouter from './routes/genres.js'
import type { modelProps } from './types/props.js'
import { errorHandler } from './middlewares/errorHandler.js'
// import { PORT } from './utils/config.js'
import cors from 'cors'
import createStatusRouter from './routes/status.js'
import createAbilitiesRouter from './routes/abilities.js'

const createApp = ({ animeModel, characterModel, genreModel, abilitiesModel, statusModel }: modelProps): Application => {
    const app = express()

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

    // app.listen(PORT, () => {
    //     console.log(`Server is running on http://localhost:${PORT}`);
    // })

    return app;
}

export default createApp;