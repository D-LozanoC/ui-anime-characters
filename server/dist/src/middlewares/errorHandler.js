export const errorHandler = (err, _req, res, next) => {
    if (err.name === 'ZodError') {
        res.json(err);
    }
    else {
        res.json({ error: { name: err.name, message: err.message } });
    }
};
