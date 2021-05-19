var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');

//Add Product
router.post('/:id', Controller.addProduct);
//Delete Product
router.delete('/:id/:product_id', Controller.deleteProduct);
module.exports = router;
