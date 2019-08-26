const Serie = require('../models/Serie');

module.exports = {
    async store(req, res) {
        const { name, status, comments, genreId } = req.body;
        const { filename } = req.file;

        const [description] = filename.split('.');
        const poster = `${description}.jpg`;

        const serie = await Serie.create({
            name,
            status,
            comments,
            poster,
            genreId
        });

        return res.json(serie);
    },
    async index(req, res) {
        const series = await Serie.find();

        return res.json(series);
    },
    async single(req, res) {
        return res.json();
    },
    async edit(req, res) {
        return res.json();
    },
    async remove(req, res) {
        return res.json();
    }
}