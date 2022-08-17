const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    email:String,
    senha:String
})
const usuario = mongoose.model('usuario',modelo)

module.exports = usuario