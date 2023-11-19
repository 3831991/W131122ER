const mysql = require('mysql2');

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

    console.log('Connect succeeded');
});

// כמו: export con.
// exports.con = con;

// כמו: export default con.
module.exports = con;