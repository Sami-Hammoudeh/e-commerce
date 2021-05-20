var express = require('express');
var router = express.Router();
const Controller = require('../controllers/cartController');


router.get('/:cart_id', Controller.getAllOrders);
router.post('/', Controller.addOrder);
router.delete('/', Controller.deleteAllOrders);
router.delete('/:cart_id', Controller.deleteOrder);
router.get('/:cart_id', Controller.checkout);

module.exports = router;
