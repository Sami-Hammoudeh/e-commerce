var express = require('express');
var router = express.Router();
const Controller = require('../controllers/brandsController');

router.get('/', Controller.getAllBrands);
router.get('/:id', Controller.getBrand);
router.post('/', Controller.addBrand);
router.delete('/', Controller.deleteAllBrands);
router.delete('/:id', Controller.deleteBrand);
router.put('/:id', Controller.updateBrand);

module.exports = router;
