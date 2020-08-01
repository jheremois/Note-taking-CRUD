const mysql = require('mysql')

const {promisify} = require('util')


const conection = {
    host:  'localhost', 
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD, 
    database:  'notes'
}

const pool = mysql.createPool(conection)

pool.getConnection((err,conection)=>{
    if (conection){conection.release()}
    console.log('conection')
    return;
})

pool.query = promisify(pool.query)

module.exports = pool
