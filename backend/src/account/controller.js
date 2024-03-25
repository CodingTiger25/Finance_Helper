const Pool = require('pg').Pool
const queries = require('./queries');

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

const addBill = (req, res) => {
    const {id, name, price, duedate} = req.body;

    pool.query(queries.addBill,
        [id, name, price, duedate],
        (error, results) => {
        if (error) throw error;
        res.status(201).send("Added new bill");
        }
    )
}

module.exports = {
    getAccountData,
    addBill
}