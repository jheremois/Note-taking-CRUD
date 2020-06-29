// Modules used
const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const http = require('http')

const app = express()

// Set the view engine (pug) and the laction of the vews files
app.set('view engine','pug')
app.set('views', path.join(__dirname,'./vistas'))

// Set statics files
app.use(express.static(path.join(__dirname,'./estaticos')))

app.use(bodyparser.urlencoded({extended: true}))
app.use(session({
    secret: 'something',
    resave:false,
    saveUninitialized:false
}))

app.use(morgan('dev'))

// Server configuration
app.set('port', process.env.PORT || 3000 )
const server = http.createServer(app)
const rutas = require('./rutas/ruth')
app.use('/', rutas())
server.listen(app.get('port'))
console.log(`Port: ${app.get('port')}`)