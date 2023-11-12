const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log('listening to port: 4000...');
});

// החזרת טקסט
app.get('/', (req, res) => {
    res.send("Welcome");
});

// החזרת אובייקט (JSON)
app.get('/home', (req, res) => {
    res.send({
        message: "Hello world!",
    });
});

// החזרת HTML
app.get('/html', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello world!</h1>");
    res.end();
});

// החזרת קובץ
app.get('/file', (req, res) => {
    res.sendFile(`${__dirname}/package.json`);
});
