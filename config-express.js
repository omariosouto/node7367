// Config, vai pro config-express.js
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

// 2 - Rotas
const rotaProdutos = require('./routes/produtos.js')
rotaProdutos(app)

require('./routes/home')(app)



module.exports = app

// module.exports = 0
// module.exports = 'sadudauh'
// module.exports = {}
// module.exports = function() {}
// module.exports = variavelSua