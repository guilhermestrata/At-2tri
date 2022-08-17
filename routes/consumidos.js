module.exports = (app)=>{
    app.get('/consumidos',async(req,res)=>{
        var comida = require('../models/comida')
        var doc = req.query.id
        var consumidos = await comida.findOneAndUpdate({_id:doc}, {status:'2'})
        res.redirect('/')
    })
}   