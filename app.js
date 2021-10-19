const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./router/api-router');

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