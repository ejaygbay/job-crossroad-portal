const routers = require('express').Router();
const authController = require('../controllers/auth-controllers');

routers.get('/login', authController.loginForm);

routers.get('/account/create', authController.signUpForm);

module.exports = routers;