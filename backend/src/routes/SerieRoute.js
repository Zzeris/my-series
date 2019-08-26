const router = require('express').Router();
const multer = require('multer');

const uploadConfig = require('../config/upload');
const SerieController = require('../controllers/SerieController');

const upload = multer(uploadConfig);

router.get('/', SerieController.index);
router.get('/:id', SerieController.single);
router.post('/', upload.single('image'), SerieController.store);
router.put('/:id', SerieController.edit);
router.delete('/:id', SerieController.remove);

module.exports = router;