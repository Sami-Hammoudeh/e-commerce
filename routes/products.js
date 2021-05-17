var express = require('express');
var router = express.Router();
const Controller = require('../controllers/productsController');

router.get('/', Controller.getAllProducts);
router.get('/:id', Controller.getProduct);
router.post('/', Controller.addProduct);
router.delete('/', Controller.deleteAllProducts);
router.delete('/:id', Controller.deleteProduct);
router.put('/:id', Controller.updateProduct);

module.exports = router;
