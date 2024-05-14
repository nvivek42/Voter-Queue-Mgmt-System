const mysql2 = require('mysql2')
const pool = mysql2.createPool({
        host:'localhost',
        port: 3306,
        user: 'root',
        password: 'admin123',
        database: 'voter_mgmt_system',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
})

module.exports = pool