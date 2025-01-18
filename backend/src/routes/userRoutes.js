const express =  require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// define routes and map to the controller functions
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;