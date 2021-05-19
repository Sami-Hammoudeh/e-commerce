var express = require('express');
var router = express.Router();
const Controller = require('../controllers/brandsController');

router.get('/', Controller.getAllBrands);
router.get('/:id', Controller.getBrand);
router.post('/', Controller.addBrand);
router.delete('/', Controller.deleteAllBrands);
router.delete('/:id', Controller.deleteBrand);
router.put('/:id', Controller.updateBrand);
//Add Product
router.post('/:id/products', Controller.addProduct);
//Delete Product
router.delete('/:id/products/:product_id', Controller.deleteProduct);
//Get All Products
router.get('/:id/products', Controller.deleteProduct);
module.exports = router;
