const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://github:github@cluster0-em4dj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

server.listen(3333);