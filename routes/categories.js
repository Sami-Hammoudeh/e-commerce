var express = require('express');
var router = express.Router();
const Controller = require('../controllers/categoriesController');
router.get('/', Controller.getAllCategories);
router.get('/:id', Controller.getCategory);
router.post('/', Controller.addCategory);
router.delete('/', Controller.deleteAllCategories);
router.delete('/:id', Controller.deleteCategoryById);
router.put('/:id', Controller.updateCategories);
//Add Sub Category
//router.post('/:id', Controller.addSubCategory);
//Delete Sub Category
//router.delete('/:id/:sub_id', Controller.deleteSubCategory);
//router.post('/:id/sub_categories', Controller.addSubCategory);
//Delete Sub Category
//router.delete('/:id/sub_categories/:sub_id', Controller.deleteSubCategory);
//Get All Sub Categories
//router.get('/:id/sub_categories', Controller.getAllSubCategories);
module.exports = router;