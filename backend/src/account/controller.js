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
    const { name, price, duedate} = req.body;

    pool.query(queries.addBill,
        [ name, price, duedate],
        (error, results) => {
        if (error) throw error;
        res.status(201).send("Added new bill");
        }
    )
}

const billPaid = ( req,res) => {

    const {id} = req.params;

    pool.query(queries.billPaid,
        [id],
        (error, results) => {
        if(error) throw error;
        res.status(201).send("Bill is paid")
        })

}

module.exports = {
    getAccountData,
    addBill,
    billPaid
}