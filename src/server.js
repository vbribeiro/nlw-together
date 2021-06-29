const express = require('express') //Importa o express
const route = require('./route')
const path = require('path')

const server = express() //Inicia o express

server.set('view engine', 'ejs') //view engine - mostra o responsável, no caso o ejs

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log("RODANDO")) //Servidor porta 3000, arrow function: função simplificada