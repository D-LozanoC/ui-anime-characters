import express, { Application } from 'express'
import morgan from 'morgan'
import createAnimeRouter from './routes/anime.ts'
import { modelProps } from './types/props.ts'
import { errorHandler } from './middlewares/errorHandler.ts'
import { PORT } from './utils/config.ts'

const createApp = ({ animeModel, characterModel }: modelProps): Application => {
    const app = express()

    app.use(express.json())
    app.use(express.static(`${process.cwd()}/public`))
    app.use(morgan('dev'))
    
    app.get('/', (req, res) => {
        res.sendFile(`${process.cwd()}/public/html/index.html`)
    })

    app.get('/docs', (req, res) => {
        res.sendFile(`${process.cwd()}/public/html/docs.html`)
    })
    
    app.get('/api', (req, res) => {
        res.json({ message: "API de animes" });
    })
    
    app.use('/api', createAnimeRouter({ animeModel, characterModel }))
    app.use((req, res) => {
        res.status(404).sendFile(`${process.cwd()}/public/html/404.html`)
    })
    app.use(errorHandler)

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })

    return app;
}

export default createApp;