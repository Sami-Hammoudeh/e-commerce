var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');
router.get('/', Controller.getAllCategories);
router.get('/:id', Controller.getCategories);
router.post('/', Controller.addCategory);
router.delete('/', Controller.deleteAllCategories);
router.delete('/:id', Controller.deleteCategory);
router.put('/:id', Controller.updateCategory);
//Add Sub Category
router.post('/:id', Controller.addSubCategory);
//Delete Sub Category
router.delete('/:id', Controller.deleteSubCategory);
module.exports = router;