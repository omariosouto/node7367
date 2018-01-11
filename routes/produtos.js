module.exports = function (app) {

    app.get('/produtos', function(req, res) {
        const connection = require('../infra/connectionFactory')()
        // Pegar infos
        connection.query('SELECT * FROM livros', function(err, result) {
            const pagina = 'Produtos'
            console.log(result) // 2
            // res.render('produtos/lista.ejs', { produtos: result })
            res.send(result)
            // API mais simple do mundo: res.send(result)
        })
        connection.end()
        // console.log('Código performaticamente sensual', idDeUmLivro) // 1
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