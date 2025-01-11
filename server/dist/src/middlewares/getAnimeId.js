"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(req, _res, next) {
    const animeId = req.baseUrl.replace('/api/animes/', '');
    req.body.animeId = animeId;
    next();
}
