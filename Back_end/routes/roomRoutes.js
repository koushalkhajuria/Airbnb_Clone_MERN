const express = require('express');
const roomController = require('../controllers/roomController');
const auth = require('../middleware/authMiddleWare');

const router = express.Router();

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(auth.protect, roomController.createRoom);

router.route('/search').get(roomController.getRoomBySearchParam);

router
  .route('/:id')
  .get(auth.protect, roomController.getRoom)
  .patch(auth.protect, roomController.updateRoom)
  .delete(auth.protect, roomController.deleteRoom);

module.exports = router;
