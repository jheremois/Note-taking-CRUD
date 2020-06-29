const bd = require('../database/conection')

const conecion = bd()

exports.home = (req, res)=>{
    conecion.query('SELECT * FROM nts',(err,resu)=>{
        res.render('home',{
            note: resu
        })
    })

}

exports.upload = (req, res)=>{

    const {title, content } = req.body
    conecion.query('INSERT INTO nts SET?',{
        title,
        content
    },(err,resul)=> {res.redirect('/')})

}

exports.delate = (req,res)=>{
    const {id} = req.params
    console.log(id)
    conecion.query(`DELETE FROM nts WHERE id = ${id}`,(err,resul)=> {res.redirect('/')})
}