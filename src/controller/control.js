/*
    Import the conection function:
*/
const bd = require('../database/conection')

const conecion = bd()



/*
    Render main view:
*/
exports.home = (req, res)=>{
    conecion.query('SELECT * FROM nts',(err,resu)=>{
        res.render('home',{
            note: resu
        })
    })

}


/*
    Add datas to the main view:
*/
exports.upload = (req, res)=>{

    const {title, content } = req.body
    conecion.query('INSERT INTO nts SET?',{
        title,
        content
    },(err,resul)=> {res.redirect('/')})

}


/*
    Delete datas from de table and from the main view:
*/
exports.delate = (req,res)=>{
    const {id} = req.params
    console.log(id)
    conecion.query(`DELETE FROM nts WHERE id = ${id}`,(err,resul)=> {res.redirect('/')})
}