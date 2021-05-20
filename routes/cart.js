var express = require('express');
var router = express.Router();
const Controller = require('../controllers/cartController');


router.get('/:id', Controller.getAllOrders);
router.post('/', Controller.addOrder);
router.delete('/', Controller.deleteAllOrders);
router.delete('/:id', Controller.deleteOrder);
router.get('/', Controller.checkout);



module.exports = router;
