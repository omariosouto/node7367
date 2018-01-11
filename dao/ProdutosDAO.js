// Data Access Object

class ProdutosDAO {
    constructor(connection) {
        this._connection = connection
    }
    lista(cb) {
        this._connection.query('SELECT * FROM livros', cb)
    }

    salva(produto, callback) {
        this._connection.query('INSERT INTO livros SET ?', produto, callback)
    }
}



module.exports = ProdutosDAO


// function ProdutosDAO(connection) {
//     this._connection = connection
// }

// ProdutosDAO.prototype.lista = function(cb) {
//     this._connection.query('SELECT * FROM livros', cb)
// }

// module.exports = ProdutosDAO


// module.exports = function() {
//     const connection = require('../infra/connectionFactory')()

//     const produtosDAO = {
//         lista: function(cb) {
//             connection.query('SELECT * FROM livros', cb)
//             connection.end()
//         }
//     }
//     return produtosDAO
// }