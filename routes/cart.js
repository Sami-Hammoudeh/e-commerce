var express = require('express');
var router = express.Router();
const Controller = require('../controllers/cartController');

router.get('/', Controller.getAllOrders);
router.get('/:id', Controller.getOrder);
router.post('/', Controller.addOrder);
router.delete('/', Controller.deleteAllOrders);
router.delete('/:id', Controller.deleteOrder);


module.exports = router;
