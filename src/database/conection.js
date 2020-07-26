const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD, 
        database:  'notes'
    });
}
