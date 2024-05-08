//routes/city.routes.js

const userController = require('../controllers/user.controller');

const {
    validateSignup,
} = require('../validations/user.validation');


// Route for userModel
router.post('/signup', validateSignup, userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);


module.exports = router;