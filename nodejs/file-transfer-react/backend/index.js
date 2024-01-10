const express = require('express');
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(9999);

app.get('/files', async (req, res) => {
    const files = fs.readdirSync(`${__dirname}/files`);

    res.send(files);
});

app.get('/file/:fileName', async (req, res) => {
    res.sendFile(`${__dirname}/files/${req.params.fileName}`);
});

app.delete('/file/:fileName', async (req, res) => {
    fs.unlinkSync(`${__dirname}/files/${req.params.fileName}`);

    res.end();
});

