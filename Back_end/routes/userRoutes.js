const express = require('express');
const userController = require('../controllers/userController');

const Router = express.Router();

Router.route('/auth/login').post(userController.loginUser);
Router.route('/auth/register').post(userController.registerUser);

module.exports = Router;
