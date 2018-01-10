const app = require('./config-express') // = app do config express

// Listen e qual porta
app.listen(3000, function () {
    console.log('Servidor subiu com sucessinhos! Ctrl + C pra derrubar')
})

