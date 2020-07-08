const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user:  'root', //<--- your user
        password:  '2110jh', // <--- your password
        database:  'notes'
    });
}