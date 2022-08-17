const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome:String,
    data:Date,
    status:{type:String,default:"0"},
    usuario:String
})
const comida = mongoose.model('comida',modelo)

module.exports = comida