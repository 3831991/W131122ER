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

app.listen(9600);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/file-upload", (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log(files);

        res.send("File Uploaded");
    });
});