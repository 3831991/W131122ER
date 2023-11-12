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
            return res.status(500).send("Error...");
        }

        res.send(result);
    });
});

app.get('/users/limit', (req, res) => {
    if (!req.query.start) {
        return res.status(403).send("limit start is required");
    }

    if (!req.query.quantity) {
        return res.status(403).send("limit quantity is required");
    }

    con.query("SELECT * FROM `users` LIMIT ?, ?", [+req.query.start, +req.query.quantity], (err, result) => {
        if (err) {
            return res.status(500).send("Error...");
        }

        res.send(result);
    });
});

app.get('/users/:id', (req, res) => {
    con.query("SELECT * FROM `users` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).send("Error...");
        }

        res.send(result.pop());
    });
});