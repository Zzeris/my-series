const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                callback(null,filename);
            })
        }
    })
};