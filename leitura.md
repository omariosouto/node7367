Procura o : Visual Studio Code 

(Tecla Windows) + Nome do programa faz a busca.


Servidor = Máquina de Estado 


======

Node começa em interpretar JavaScript

Intepretadores: 
- V8 (C/C++)
- SpiderMockey
- Nitro 
- Chakra 


Node = V8 + Coisas do SO (Libuv)



======


Framework: Resolve o Mundo
Lib: É um pedaço do Framework



##### Final capitulo 1

- npm install -g : Instala global na máquina
nodemon cdc.js

- npm install --save-dev: Somente no projeto, acessa pela pasta bin
./node_modules/.bin/nodemon cdc.js 
// Roda o projeto com o comando acima

## Desafio
``` cdc.js
    res.render('produtos/lista', {
        produtos: produtos
    })
```

## Lista.ejs
```
    <ul>
        <% for(let produto of produtos) { %>
            <li><%= produto %></li>
        <% } %>
    </ul>
```



## Capitulo 2


Como o Js funciona: 
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbGljYXIobjEsIG4yKSB7CiAgICByZXR1cm4gbjEgKiBuMgp9CgpmdW5jdGlvbiBxdWFkcmFkbyhuKSB7CiAgICByZXR1cm4gbXVsdGlwbGljYXIobixuKQp9CgpmdW5jdGlvbiBtb3N0cmFRdWFkcmFkbyh0YW1hbmhvKSB7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgIHF1YWRyYWRvKHRhbWFuaG8pICAgICAgICAKICAgIH0sIDUwMDApCgp9Cgptb3N0cmFRdWFkcmFkbyg0KSAKY29uc29sZS5sb2coJ0JhZ3VsaG9zJykK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

Motivos pra surigr o NodeJS:
https://www.youtube.com/watch?v=ztspvPYybIY


        // 1- Faz a conexão com o Banco
        // 2 - Faz a query
        // 3 - Baixa os arquivos desse link: 
        // https://github.com/MarcoBrunoBR/arquivos-js35/
        // 4 - Cola na pasta do seu projeto
        // 5 - Faz os itens aparecerem
        // 6 - Configura arquivos estáticos
        // Middleware / Interceptador
            // app.use(express.static('./public'))



# Cap 4

O que precisamos pra cadastrar um produto?

- Rotas
- Pagina/View
- Formulário


Quando clicar no gravar, o que acontece? 

- Faz um post : CHECK
- pegar os parametros, da requisição, onde? 
- Criar o método salvar
- Insere no banco : 