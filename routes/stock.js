var express = require('express');
var router = express.Router();
const Controller = require('../controllers/stockController');

router.get('/',Controller.getAll);

module.exports = router;
