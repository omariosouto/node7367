module.exports = function (app) {
   
    app.get('/produtos', function(req, res) {
        var pagina = 'Produtos'
        const produtos =  ['Livro Node', 'Livro JS']
        
        res.render('produtos/lista', {
            produtos: produtos
        })
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