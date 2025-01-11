"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbilitiesController {
    #model;
    constructor({ model }) {
        this.#model = model;
    }
    getAllAbilities = async (_req, res, next) => {
        try {
            const abilities = await this.#model.getAllAbilities();
            res.status(200).json(abilities).end();
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = AbilitiesController;
