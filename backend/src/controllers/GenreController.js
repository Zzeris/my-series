const Genre = require('../models/Genre');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const genre = await Genre.create({
            name
        });

        return res.json(genre);
    },
    async index(req, res) {
        const genres = await Genre.find();
        return res.json(genres);
    },
    async single(req, res) {
        const { id } = req.params;

        const genre = await Genre.findById(id);

        return res.json(genre);
    },
    async edit(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const genre = await Genre.findById(id);

        genre.name = name;

        genre.save();

        return res.json(genre);
    },
    async remove(req, res) {
        const { id } = req.params;

        const genre = await Genre.findById(id);

        await genre.remove();

        return res.json(genre);
    }
}