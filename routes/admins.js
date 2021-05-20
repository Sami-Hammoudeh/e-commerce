var express = require('express');
var router = express.Router();
var isAdmin = require("../middleware/isAdmin");
var isMainAdmin = require("../middleware/isMainAdmin");
const Controller = require('../controllers/adminsController');

router.get('/', isAdmin, Controller.getAllAdmins);
router.get('/:id', isAdmin, Controller.getAdmin);
router.post('/', isMainAdmin, Controller.addAdmin);
router.delete('/', isMainAdmin, Controller.deleteAllAdmins);
router.delete('/:id', isMainAdmin, Controller.deleteAdmin);
router.put('/:id', isAdmin, Controller.updateAdmin);
router.put('/:id/password', isAdmin, Controller.changePassword);
module.exports = router;
