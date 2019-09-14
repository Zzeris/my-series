const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Serie = require('../models/Serie');

module.exports = {
    async store(req, res) {
        const { name, status, comments, genre } = req.body;
        const { filename } = req.file;

        const [description] = filename.split('.');
        const poster = `${description}.jpg`;

        const serie = await Serie.create({
            name,
            status,
            comments,
            poster,
            genre
        });

        return res.json(serie);
    },
    async index(req, res) {
        const series = await Serie.find().populate('genre','name -_id');

        return res.json(series);
    },
    async single(req, res) {
        const { id } = req.params;

        const serie = await Serie.findById(id).populate('genre');

        return res.json(serie);
    },
    async edit(req, res) {
        const { id } = req.params;
        const { name, status, comments, genre } = req.body;
        const { filename } = req.file;
        
        const [description] = filename.split('.');
        const poster = `${description}.jpg`;

        const serie = await Serie.findById(id);

        serie.name = name;
        serie.status = status;
        serie.comments = comments;
        serie.genre = genre;
        serie.poster = poster;

        await serie.save();

        return res.json(serie);
    },
    async remove(req, res) {
        const { id } = req.params;

        const serie = await Serie.findById(id);

        promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'uploads', serie.poster));

        await serie.remove();

        return res.json({ok: true});
    }
}