const express = require('express');
require('./sqlConnection');

const app = express();

app.listen(4000, () => {
    console.log('listening on port 4000');
});

app.get('/', (req, res) => {
    res.send("Welcome to the server")
});

require('./handlers/products')(app);