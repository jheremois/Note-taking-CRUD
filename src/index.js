// Modules used
const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const env = require('node-env-file')

const app = express()

// Set the view engine (pug) and the laction of the vews files
app.set('view engine','pug')
app.set('views', path.join(__dirname,'./views'))

// Middleware
app.use(express.static(path.join(__dirname,'./static')))

app.use(bodyparser.urlencoded({extended: true}))
app.use(session({
    secret: 'something',
    resave:false,
    saveUninitialized:false
}))

app.use(morgan('dev'))

env('./.env') 

// Server configuration
app.set('port', process.env.PORT || 3000 )
const server = http.createServer(app)
const routes = require('./routes/route')
app.use('/', routes())
server.listen(app.get('port'))
console.log(`Port: ${app.get('port')}`)