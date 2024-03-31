const addBill = "INSERT INTO bills ( name, price,duedate) VALUES ( $1, $2, $3)";

module.exports = {
    addBill
}