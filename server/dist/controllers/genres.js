export default class GenresController {
    #model;
    constructor({ model }) {
        this.#model = model;
    }
    getAllGenres = async (_req, res, next) => {
        try {
            const genres = await this.#model.getAllGenres();
            res.status(200).json(genres).end();
        }
        catch (error) {
            next(error);
        }
    };
}
