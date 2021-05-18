var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');
router.get('/', Controller.getAllCategories);
router.get('/:id', Controller.getCategories);
router.post('/', Controller.addCategory);
router.delete('/', Controller.deleteAllCategories);
router.delete('/:id', Controller.deleteCategory);
router.put('/:id', Controller.updateCategory);
module.exports = router;



