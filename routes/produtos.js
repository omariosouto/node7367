// Importação de libs
const ProdutosDAO = require('../dao/ProdutosDAO.js')
const connectionFactory = require('../infra/connectionFactory')

module.exports = function (app) {

    app.get('/produtos', function(req, res) {
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)

        produtosDAO.lista(function(err, result) {
            const pagina = 'Produtos'
            console.log(result) // 2
            res.render('produtos/lista.ejs', { produtos: result })
            // API mais simple do mundo: res.send(result)
        })
        
        // Pegar infos
        // Trazer o produto e joga na view
        

        // console.log('Código performaticamente sensual', idDeUmLivro) // 1
    })  
    app.post('/produtos', function(req, res) {
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)

        // Pra Salvar um produto
        const produto = req.body

        produtosDAO.salva(produto, function(err) {
            res.send(produto)
        })

    })

    app.get('/produtos/cadastro', function(req, res) {
        res.render('produtos/form')
    })

    app.get('/produtos/:id', function(req, res) {
        
        const connection = require('../infra/connectionFactory')()
        const idDoLivro = req.params.id
        
        connection.query(`SELECT * FROM livros WHERE id = ?`, idDoLivro,
                         function(err, result) {
                             res.send(result)
        })
        connection.end()

    })
}










//console.log(teste)
// console.log(app)
// // Produtos
// app.get('/produtos', function(req, res) {
//     var pagina = 'Produtos'
//     const produtos =  ['Livro Node', 'Livro JS']
    
//     res.render('produtos/lista', {
//         produtos: produtos
//     })
//     // res.send(`
//     // <html>
//     //     <head>
//     //         <title>Casa do Codigo - ${pagina}</title>
//     //     </head>
//     //     <body>
//     //         <h1>${pagina}</h1>
//     //         <ul>
//     //             ${produtos.join(', ')}
//     //         </ul> 
//     //     </body>
//     // </html>`)
// })