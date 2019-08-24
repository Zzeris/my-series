const router = require('express').Router();

const SerieController = require('../controllers/SerieController');

router.get('/', SerieController.index);
router.get('/:id', SerieController.single);
router.post('/', SerieController.store);
router.put('/:id', SerieController.edit);
router.delete('/:id', SerieController.remove);

module.exports = router;