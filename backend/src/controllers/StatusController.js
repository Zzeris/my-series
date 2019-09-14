const Serie = require('../models/Serie');

module.exports = {
    async store(req, res) {
        const serie = await Serie.findById(req.params.id);

        serie.status === 'ASSISTIR'
        ? serie.status = 'ASSISTIDO'
        : serie.status = 'ASSISTIR' 

        await serie.save();

        return res.json(serie);
    }
};