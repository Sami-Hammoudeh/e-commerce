var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');
router.get('/', Controller.getAllSubCategories);
router.get('/:id', Controller.getSubCategory);
router.post('/', Controller.addSubCategory);
router.delete('/', Controller.deleteAllSubCategories);
router.delete('/:id', Controller.deleteSubCategory);
router.put('/:id', Controller.updateSubCategory);
//Add Product
router.post('/:id', Controller.addProduct);
//Delete Product
router.delete('/:id/:product_id', Controller.deleteProduct);
//Get All Products
router.get('/:id/products', Controller.getAllProducts);
module.exports = router;
