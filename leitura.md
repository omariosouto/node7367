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