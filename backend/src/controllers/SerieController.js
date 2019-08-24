const Serie = require('../models/Serie');

module.exports = {
    async store(req, res) {
        const { name, status, comments, poster, background, genreId } = req.body;

        const serie = await Serie.create({
            name,
            status,
            comments,
            poster,
            background,
            genreId
        });

        return res.json(serie);
    },
    index(req, res) {
        return res.json();
    },
    single(req, res) {
        return res.json();
    },
    edit(req, res) {
        return res.json();
    },
    remove(req, res) {
        return res.json();
    }
}