const mongoose = require('mongoose')

const conn = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://userCompras:felicidade2233@fiaptecnico.73xj5.mongodb.net/test')
}
module.exports = conn