export default function (req, _res, next) {
    const animeId = req.baseUrl.replace('/api/animes/', '');
    req.body.animeId = animeId;
    next();
}
