const express = require('express');
const path = require('path');
const server = express();
const pages = require('./pages');

server
//utilizar body do req
.use(express.urlencoded({ extended: true }))
//configurando arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criando rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanages)

//ligando o servidor
server.listen(5500)