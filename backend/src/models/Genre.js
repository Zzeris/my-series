const { Schema, model } = require('mongoose');

const GenreSchema = new Schema({
    name: String
},{
    timestamps: true
});

module.exports = model('Genre', GenreSchema);