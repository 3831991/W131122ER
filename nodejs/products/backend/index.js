const express = require('express');
const cors = require('cors');
require('./sqlConnection');
const fs = require('fs');
const moment = require('moment');

const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use((req, res, next) => {
    const fileName = `log_${moment().format("Y_M_D")}.txt`;

    let content = '';

    content += `Time: ${new Date().toISOString()}\n`;
    content += `Method: ${req.method}\n`;
    content += `Route: ${req.url}\n`;

    content += '\n';

    fs.appendFile(fileName, content, err => {});

    next();
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});

app.get('/', (req, res) => {
    res.send("Welcome to the server")
});

require('./handlers/products')(app);