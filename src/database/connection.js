const { Pool } = require('pg')

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'r12345*',
    database: 'employees',
    port: '5432'
}

const pool = new Pool(config);

module.exports = pool