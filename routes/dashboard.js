var express = require('express');
var router = express.Router();
const Controller = require('../controllers/dashboardController');

router.get('/stock', Controller.getStock);
router.get('/income', Controller.getIncome);
router.get('/categories', Controller.getCategories);

module.exports = router;