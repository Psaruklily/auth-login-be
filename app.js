const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRouter = require('./router/api-router');

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

_connectDB();

app.use('/', apiRouter);

app.get('/', (req, res) => {
    res.json('Hello, world!');
});

app.listen(5000, () => {
    console.log('Server running on localhost 5000');
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/usersDB');
    const { connection } = mongoose;
    connection.on('error',
            error => {
        console.log(error);
    })
}