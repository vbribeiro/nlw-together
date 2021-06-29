const express = require('express') //Importa o express
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/index', (req, res) => res.render("index", {page: 'enter-room'})) //req - requisição | res - resposta (renderizando a index)
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'})) //req - requisição | res - resposta (renderizando a create-pass)

route.get('/room/:room-id', (req, res) => res.render("room")) //req - requisição | res - resposta (renderizando a room)

// formato que o form de dentro da modal tem que passar a info
route.post('/room/:room/:question/:action', QuestionController.index)

route.post('/room/create-room', RoomController.create)

module.exports = route  