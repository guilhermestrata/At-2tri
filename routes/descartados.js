module.exports = (app)=>{
    app.get('/descartados',async(req,res)=>{
        var comida = require('../models/comida')
        var doc = req.query.id
        var consumidos = await comida.findOneAndUpdate({_id:doc}, {status:'3'})
        res.redirect('/')
    })
}   