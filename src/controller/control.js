/*
    Import the conection module:
*/
const conecion = require('../database/conection')


/*
    Render:
*/
exports.home = (req, res)=>{
    conecion.query('SELECT * FROM nts',(err,resu)=>{
        res.render('home',{
            note: resu
        })
    })

}


/*
    Add:
*/
exports.upload = (req, res)=>{

    const {title, content } = req.body
    conecion.query('INSERT INTO nts SET?',{
        title,
        content
    },(err,resul)=> {res.redirect('/')})

}


/*
    Delete:
*/
exports.delate = async (req,res)=>{
    const {id} = req.params
    
    const Delete = await conecion.query(`DELETE FROM nts WHERE id = ${id}`)

    res.redirect('/')
}

/*
    update:
*/
exports.update = async (req,res)=>{
    const {id} = req.params
    
    const datas = await conecion.query(`SELECT * FROM nts WHERE id = ${id}`)
    
    const render = await res.render('edit', {datas: datas[0]})

}

exports.change = async (req, res)=>{
    const {id} = req.params

    const {title, content} = req.body
    
    const newnote = {
        title,
        content,
    }
    
    const update = await conecion.query(`UPDATE nts SET ? WHERE id = ?`, [newnote, id])

    res.redirect('/')
}