const express = require('express');
const mysql = require('mysql2');

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'full-stack-w131122er',
});

con.connect(err => {
    if (err) {
        throw err;
    }

    console.log('connection established..');
});

app.listen(2000, () => {
    console.log('listening on port 2000');
});

app.get('/', (req, res) => {
    res.send('Welcome!!!');
});

app.get('/users', (req, res) => {
    con.query("SELECT * FROM `users`", (err, result) => {
        if (err) {
            return res.status(500).send("Yesh takala...");
        }

        res.send(result);
    })
})