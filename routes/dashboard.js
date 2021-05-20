var express = require('express');
var router = express.Router();
const Controller = require('../controllers/dashboardController');

router.get('/stock', Controller.getStock);

module.exports = router;