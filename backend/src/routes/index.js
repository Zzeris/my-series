const router = require('express').Router();

const SerieRoute = require('../routes/SerieRoute');
const GenreRoute = require('../routes/GenreRoute');

router.get('/', (req, res) => res.send({
    info: 'Minhas Séries',
    datetime: new Date()
}));

router.use('/series', SerieRoute);
router.use('/genres', GenreRoute);

module.exports = router;