"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const anime_js_1 = __importDefault(require("./routes/anime.js"));
const genres_js_1 = __importDefault(require("./routes/genres.js"));
const errorHandler_js_1 = require("./middlewares/errorHandler.js");
const config_js_1 = require("./utils/config.js");
const cors_1 = __importDefault(require("cors"));
const status_js_1 = __importDefault(require("./routes/status.js"));
const abilities_js_1 = __importDefault(require("./routes/abilities.js"));
const createApp = ({ animeModel, characterModel, genreModel, abilitiesModel, statusModel }) => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.static(`${process.cwd()}/public`));
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)());
    app.get('/', (_req, res) => {
        res.sendFile(`${process.cwd()}/public/html/index.html`);
    });
    app.get('/docs', (_req, res) => {
        res.sendFile(`${process.cwd()}/public/html/docs.html`);
    });
    app.get('/api', (_req, res) => {
        res.json({ message: "API de animes" });
    });
    app.use('/api', (0, genres_js_1.default)(genreModel));
    app.use('/api', (0, abilities_js_1.default)(abilitiesModel));
    app.use('/api', (0, status_js_1.default)(statusModel));
    app.use('/api', (0, anime_js_1.default)({ animeModel, characterModel }));
    app.use((_req, res) => {
        res.status(404).sendFile(`${process.cwd()}/public/html/404.html`);
    });
    app.use(errorHandler_js_1.errorHandler);
    app.listen(config_js_1.PORT, () => {
        console.log(`Server is running on http://localhost:${config_js_1.PORT}`);
    });
    return app;
};
exports.default = createApp;
