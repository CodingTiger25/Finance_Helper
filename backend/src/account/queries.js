const addBill = "INSERT INTO bills ( name, price,duedate) VALUES ( $1, $2, $3)";

const billPaid = "UPDATE bills SET paid = TRUE WHERE id = ($1)"

module.exports = {
    addBill,
    billPaid
}