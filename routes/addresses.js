var express = require('express');
var router = express.Router();
const Controller = require('../controllers/addressesController');

router.get('/', Controller.getAllAddresses);
router.get('/:id', Controller.getAddress);
router.post('/', Controller.addAddress);
router.delete('/', Controller.deleteAllAddresses);
router.delete('/:id', Controller.deleteAddress);
router.put('/:id', Controller.updateAddress);

module.exports = router;
