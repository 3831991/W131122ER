const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('./sqlConnection');

const app = express();

app.use(express.json());

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: true,
}));

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
    res.send({
        message: 'Hello world!',
    });
});

require('./handlers/login')(app);
require('./handlers/signup')(app);
require('./handlers/logout')(app);
require('./handlers/products')(app);