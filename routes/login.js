module.exports = (app)=>{
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
    
    app.post('/login', async(req,res)=>{
        var dados = req.body
        var database = require('../config/database')()
        var usuario = require('../models/usuario')
        var verificar = await usuario.findOne({email:dados.email})

        if(!verificar){
        return res.redirect("/registro")
        }
        var cript = require('bcryptjs')
        var comparar = await cript.compare(dados.senha,verificar.senha)

        if(!comparar){
            return res.send("invalid password")
        }

        res.redirect('/adicionar?id='+verificar.id)
    })  
}