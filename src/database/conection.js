const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user:  'root', //<--- your user
        password:  'root', // <--- your password
        database:  'notes'
    });
}