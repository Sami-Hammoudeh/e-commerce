var express = require('express');
var router = express.Router();
const Controller = require('../controllers/adminsController');

router.get('/', Controller.getAllAdmins);
router.get('/:id', Controller.getAdmin);
router.post('/', Controller.addAdmin);
router.delete('/', Controller.deleteAllAdmins);
router.delete('/:id', Controller.deleteAdmin);
router.put('/:id', Controller.updateAdmin);

module.exports = router;
