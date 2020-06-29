const express = require('express')
const control = require('../controlador/control')


const router = express.Router()

module.exports = () => {
    router.get('/',control.home)
    router.post('/',control.upload)
    router.get('/delete/:id',control.delate)
    return router
}