var express = require('express');
var router = express.Router();
const Controller = require('../controllers/customersController');

router.get('/', Controller.getAllCustomers);
router.get('/:id', Controller.getCustomer);
router.post('/', Controller.addCustomer);
router.delete('/', Controller.deleteAllCustomers);
router.delete('/:id', Controller.deleteCustomer);
router.put('/:id', Controller.updateCustomer);

module.exports = router;
