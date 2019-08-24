const Genre = require('../models/Genre');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const genre = await Genre.create({
            name
        });

        return res.json(genre);
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