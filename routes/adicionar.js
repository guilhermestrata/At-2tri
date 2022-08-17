const usuarios = require('../models/usuario')

module.exports = (app)=>{
    app.get('/adicionar',(req,res)=>{
        var user = req.query.id
        res.render('adicionar.ejs',{id:user})
    })
    app.post('/adicionar', async(req,res)=>{
        var dados = req.body
        var database = require('../config/database')()
        var comida = require('../models/comida')

            var documento = await new comida({
                nome:dados.nome,
                data:dados.data,
                status:dados.status,
                usuario:dados.id
            }).save()
        res.redirect('/adicionar?id='+dados.id)
    })
}