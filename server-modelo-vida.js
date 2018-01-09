// Router / Roteamento / Roteador não da net
const http = require('http')

const server = http.createServer(function (request, response) {
    const rotas = []
    rotas['/'] = '<h1>Home</h1>'
    rotas['/produtos'] = '<h1>Produtos</h1>'

    if(rotas[request.url]) {
        console.log('tem a rota')
        response.end(rotas[request.url])
    } else {
        console.log('nao tem')
        response.writeHead(404)
        response.end('Alguma coisa você errou')
    }
})

server.listen(3000, 'localhost', function terminou() {
    console.log('Servidor criado, derruba com Ctrl + C')
})























// var http = require('http')
// // criar Servidor
// // HTTP
// // Requisições por do meio do http
// // Respostas por do meio do http

// var server = http.createServer(function (request, response) {
//     // Criar rota
//     var rotas = {
//         '/produtos': '<h1>Produtos</h1>',
//         '/': '<h1>Home</h1>'
//     }
//     var rotas = []
//     rotas['/produtos'] = '<h1>Produtos</h1>',
//     rotas['/'] = '<h1>Home</h1>'
//     // Desafio é o 404 com if, sem if, com ajuda, sem ajuda

//     // if(request.url == '/produtos') {
//     //     response.end('<h1>Produtos</h1>')
//     // } 
//     // if(request.url == '/') {
//     //     response.end('<h1>Home</h1>')
//     // }
//     // response.writeHead(404, {
//     //     'Content-type': 'text/html'
//     // })
//     // response.end('<h1>Desculpa, vc se enganou</h1>')
    
//     // Faz o 404
//     response.end(rotas[request.url])
// })

// server.listen(3000, 'localhost', function terminou(erro) {
//     console.log('Subiu com sucessinhos, pra cancelar: Ctrl + C')
// })
