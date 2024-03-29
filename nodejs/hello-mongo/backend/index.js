require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.REMOTE_URL);
    console.log('mongodb connection established on port 27017');
}

main().catch(err => console.log(err));

const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
}));

app.listen(4000);

app.get('/', (req, res) => res.send("Hello World!"));
require('./handlers/clients/clients')(app);
require('./handlers/auth/login')(app);
require('./handlers/auth/logout')(app);
require('./handlers/auth/signup')(app);
require('./handlers/products/products')(app);
require('./handlers/products/products-dashboard')(app);