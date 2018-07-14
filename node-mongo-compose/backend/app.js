const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

//Database (API de Promisses do Node, associando com API de promisses do mongoose)
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb') //acessando serviço do container :27017

//middlewares
server.use(bodyParser.urlencoded({extended:true})) //parser do conteúdo (urlenconded)
server.use(bodyParser.json())
server.use(cors())

//ODM (mapeamento objeto-documento)
const Client = restful.model('Cliente', {
    name: { type: String, required: true}
})

//REST API
Client.methods(['get','post','put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

//Routes
Client.register(server, '/clients')

//Teste
//server.get('/', (req, res, next) => res.send('backend ok'))

//start server
server.listen(3000)