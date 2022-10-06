const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const authController = require('../controllers/auth')

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/signup', authController.signup)
router.post('/login', authController.login)




module.exports = router; 
