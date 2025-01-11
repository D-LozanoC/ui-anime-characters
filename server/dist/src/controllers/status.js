export default class StatusController {
    #model;
    constructor({ model }) {
        this.#model = model;
    }
    getAllStatus = async (_req, res, next) => {
        try {
            const status = await this.#model.getAllStatus();
            res.status(200).json(status).end();
        }
        catch (error) {
            next(error);
        }
    };
}
