module.exports = (app)=>{
    app.get('/excluir',async(req,res)=>{
        var comida = require('../models/comida')
        var doc = req.query.id
        var excluir = await comida.findOneAndDelete({_id:doc})
        res.redirect('/')
    })
}   