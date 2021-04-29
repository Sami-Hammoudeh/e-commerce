var express = require('express');
var router = express.Router();
const Controller = require('../controllers/customersController');

router.get('/', Controller.getAllUsers);
router.get('/:id', Controller.getUser);
router.post('/', Controller.addUser);
router.delete('/', Controller.deleteAllUsers);
router.delete('/:id', Controller.deleteUser);
router.put('/:id', Controller.updateUser);

module.exports = router;
