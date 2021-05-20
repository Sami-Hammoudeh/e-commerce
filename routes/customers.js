var express = require('express');
var router = express.Router();
var isAdmin = require("../middleware/isAdmin");
var isCustomer = require("../middleware/isCustomer");
var isAuth = require("../middleware/isAuth");
const Controller = require('../controllers/customersController');

router.get('/', isAdmin, Controller.getAllCustomers);
router.get('/:id', isCustomer, Controller.getCustomer);
router.delete('/', isAdmin, Controller.deleteAllCustomers); 
router.delete('/:id', isAuth, Controller.deleteCustomer); 
router.put('/:id', isCustomer, Controller.updateCustomer);
router.put('/:id/password', isCustomer, Controller.changePassword);

module.exports = router;