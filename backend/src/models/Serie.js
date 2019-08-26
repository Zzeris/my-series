const { Schema, model } = require('mongoose');

const SerieSchema = new Schema({
    name: String,
    status: String,
    comments: String,
    poster: String,
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }
},{
    timestamps: true
});

module.exports = model('Serie', SerieSchema);