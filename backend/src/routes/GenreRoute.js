const router = require('express').Router();

const GenreController = require('../controllers/GenreController');

router.get('/', GenreController.index);
router.get('/:id', GenreController.single);
router.post('/', GenreController.store);
router.put('/:id', GenreController.edit);
router.delete('/:id', GenreController.remove);

module.exports = router;