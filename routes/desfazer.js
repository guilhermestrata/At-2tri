module.exports = (app)=>{
    app.get('/desfazer',async(req,res)=>{
        var comida = require('../models/comida')
        var doc = req.query.id
        var desfazer = await comida.findOneAndUpdate({_id:doc}, {status:'0'})
        res.redirect('/')
    })
}   