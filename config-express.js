// Config, vai pro config-express.js
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const load = require('express-load')
const app = express()
app.set('view engine', 'ejs')

// 1- Config  Middleware / Interceptador
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

// 2 - Rotas
load('routes')
    .then('infra')
    .into(app)

console.log(app.infra)

    // require(cada_arquivo)(app)

// const rotaProdutos = require('./routes/produtos.js')
// rotaProdutos(app)

// require('./routes/home')(app)

// 3 - Erros Middleware de Tratamento de Erro
app.use(function(req, res, next) {
    console.log('Entrou na bolinha azul', req.originalUrl)
    res.status(404).render('404')
    next()
})

app.use(function(err, req, res, next) {
    res.status(500).send(`Página de erro crítico da morte: ${err}`)
    next()
})




module.exports = app

// module.exports = 0
// module.exports = 'sadudauh'
// module.exports = {}
// module.exports = function() {}
// module.exports = variavelSua