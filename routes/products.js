var express = require('express');
var router = express.Router();
var isAdmin = require("../middleware/isAdmin");
const Controller = require('../controllers/productsController');

router.get('/', Controller.getAllProducts);
router.get('/:id', Controller.getProduct);
router.post('/', isAdmin, Controller.addProduct);
router.delete('/', isAdmin, Controller.deleteAllProducts);
router.delete('/:id', isAdmin, Controller.deleteProduct);
router.put('/:id', isAdmin, Controller.updateProduct);

module.exports = router;
