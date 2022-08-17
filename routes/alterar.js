var comida = require('../models/comida')
var database = require('../config/database')()
module.exports = (app)=>{
    app.get('/alterar',async(req,res)=>{
        var id = req.query.id
        var alterar = await comida.findOne({_id:id})
        res.render('alterar.ejs', {alterar})
    })
    app.post('/alterar',async(req,res)=>{
        var dados = req.body
        var atualizar = await comida.findOneAndUpdate(
            {_id:dados.id},{
                nome:dados.nome,
                data:dados.data
            })
        res.redirect('/')   
    })
}