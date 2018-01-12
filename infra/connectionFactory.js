const mysql = require('mysql') // Libzinha que tem o Driver p/ conectar

function connectionFactory() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadelcodigo'
    })

}

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'casadelcodigo'
// })


// module.exports = function() {
//     return connectionFactory
// }
// module.exports = () => {
//     return connectionFactory
// }
module.exports = () => connectionFactory
// Quando que eu uso arrow function?
// Sempre que você nao depender do this