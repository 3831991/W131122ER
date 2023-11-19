const express = require('express');
const cors = require('cors');
require('./sqlConnection');

const app = express();

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(4000, () => {
    console.log('listening on port 4000');
});

app.get('/', (req, res) => {
    res.send("Welcome to the server")
});

require('./handlers/products')(app);