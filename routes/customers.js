var express = require('express');
var router = express.Router();
const Controller = require('../controllers/customersController');

router.get('/', Controller.getAllCustomers); //Admin Auth
router.get('/:id', Controller.getCustomer);
router.delete('/', Controller.deleteAllCustomers); //Admin Auth
router.delete('/:id', Controller.deleteCustomer); //Admin and Customer Auth
router.put('/:id', Controller.updateCustomer);
router.put('/:id/password', Controller.changePassword);

module.exports = router;