const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'cubonesPG',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'financeTrack'
})
const getAccountData = (req, res) => {

   pool.query("SELECT * FROM bills", (error, results) => {
       if(error) throw error;
       res.status(200).json(results.rows);
   })


}

module.exports = {
    getAccountData,
}