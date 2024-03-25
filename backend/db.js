const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'cubonesPG',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'financeTrack'
})


module.exports = pool;