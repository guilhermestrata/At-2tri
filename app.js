const servidor = require('./config/servidor')
const consign = require('consign')
var app = servidor.app
const porta = servidor.porta
consign().include('./routes').into(app)

app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})