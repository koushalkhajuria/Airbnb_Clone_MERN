const express = require('express');
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleWare');

const Router = express.Router();

Router.route('/room/booking').post(
  auth.protect,
  bookingController.createBooking
);
Router.route('/mybookings/:id').get(
  auth.protect,
  bookingController.getAllBooking
);

module.exports = Router;
