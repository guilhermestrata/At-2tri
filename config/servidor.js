const express = require("express")
const app = express()
const consign = require('consign')

app.use(express.static('assets'))
app.use(express.urlencoded({extended:false}))

const porta = process.env.PORT||3030 

module.exports = {app, porta}