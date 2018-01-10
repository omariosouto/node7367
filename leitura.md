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

