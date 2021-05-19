var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');

//Add Product
router.post('/:id/products', Controller.addProduct);
//Delete Product
router.delete('/:id/products/:product_id', Controller.deleteProduct);
//Get All Products
router.get('/:id/products', Controller.getAllProducts);
module.exports = router;
