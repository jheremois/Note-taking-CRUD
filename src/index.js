// Modules used

const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyparser = require('body-parser')
const http = require('http')
const env = require('node-env-file')

const app = express()


// Set the view engine (pug) and the laction of the vews files

app.set('view engine','pug')
app.set('views', path.join(__dirname,'./views'))


// Middlewares

app.use(express.static(path.join(__dirname,'./public')))

app.use(bodyparser.urlencoded({extended: true}))
app.use(session({
    secret: 'something',
    resave:false,
    saveUninitialized:false
}))



env('./.env')


// Loads routes

app.set('port', process.env.PORT || 3000 )

const server = http.createServer(app)
const routes = require('./routes/route')
app.use('/', routes())

// 404

app.use(function(req, res, next){
    res.status(404)

    res.render('404', { url: req.url })
    return
})

// Launch Server

server.listen(app.get('port'))
