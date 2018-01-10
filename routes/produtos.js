module.exports = function (app) {
    app.get('/produtos', function(req, res) {
        const mysql = require('mysql') // Libzinha que tem o Driver p/ conectar
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadelcodigo'
        })
        // Pegar infos
        connection.query('SELECT * FROM livros', function(err, result) {
            const pagina = 'Produtos'
            console.log(result) // 2
            res.render('produtos/lista', { produtos: result })
            // API mais simple do mundo: res.send(result)
        })
        // console.log('Código performaticamente sensual', idDeUmLivro) // 1
        // 1- Faz a conexão com o Banco
        // 2 - Faz a query
        // 3 - Baixa os arquivos desse link: 
        // https://github.com/MarcoBrunoBR/arquivos-js35/
        // 4 - Cola na pasta do seu projeto
        // 5 - Faz os itens aparecerem
        // 6 - Configura arquivos estáticos
        // Middleware / Interceptador
            // app.use(express.static('./public'))
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