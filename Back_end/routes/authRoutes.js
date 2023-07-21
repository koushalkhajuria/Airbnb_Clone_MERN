const express = require('express');
const userController = require('../controllers/authController');

const Router = express.Router();

Router.route('/auth/refresh').get(userController.refresh);
Router.route('/auth/logout').get(userController.logout);

module.exports = Router;
