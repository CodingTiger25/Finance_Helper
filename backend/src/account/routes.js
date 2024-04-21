const {Router} = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getAccountData);

router.post('/', controller.addBill);

router.put('/:id', controller.billPaid);


module.exports = router;