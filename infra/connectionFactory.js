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

module.exports = connectionFactory