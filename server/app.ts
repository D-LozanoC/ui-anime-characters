import express from 'express'
import { PORT } from './utils/config'

const createApp = () => {
    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        res.send('Hello, Anime World!')
    })
    
    app.get('/anime', (req, res) => {
        res.json({anime: "hola"})
    })
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        console.log(`http://localhost:${PORT}`);
    })

    return app;
}

export default createApp;