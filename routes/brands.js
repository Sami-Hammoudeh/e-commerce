var express = require('express');
var router = express.Router();
var isAdmin = require("../middleware/isAdmin");
const Controller = require('../controllers/brandsController');

router.get('/', Controller.getAllBrands);
router.get('/:id', Controller.getBrand);
router.post('/', isAdmin, Controller.addBrand);
router.delete('/', isAdmin, Controller.deleteAllBrands);
router.delete('/:id', isAdmin, Controller.deleteBrand);
router.put('/:id', isAdmin, Controller.updateBrand);
//Add Product
router.post('/:id/products', isAdmin, Controller.addProduct);
//Delete Product
router.delete('/:id/products/:product_id', isAdmin, Controller.deleteProduct);
//Get All Products
router.get('/:id/products', Controller.getAllProducts);
module.exports = router;
