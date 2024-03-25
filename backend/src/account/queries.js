const addBill = "INSERT INTO bills (id, name, price,duedate) VALUES ($1, $2, $3, $4)";

module.exports = {
    addBill
}