//routes/city.routes.js

const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const {
    validateSignup,
} = require('../validations/user.validation');


// Route for userModel
router.post('/signup', validateSignup, userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;