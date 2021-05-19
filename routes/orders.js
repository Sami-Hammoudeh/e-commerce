var express = require('express');
var router = express.Router();
const Controller = require('../controllers/ordersController');

router.get('/', Controller.getAllOrders);
router.get('/:id', Controller.getOrder);
router.post('/', Controller.addOrder);
router.delete('/', Controller.deleteAllOrders);
router.delete('/:id', Controller.deleteOrder);
router.put('/:id', Controller.updateOrder);

module.exports = router;

