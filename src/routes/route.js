const express = require('express')
const control = require('../controller/control')


const router = express.Router()

module.exports = () => {

    router.get('/', control.home)
    router.post('/', control.upload)
    router.get('/delete/:id',control.delate)
    router.get('/edit/:id', control.update)
    router.post('/edit/:id', control.change)

    return router
}