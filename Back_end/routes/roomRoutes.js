const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const roomController = require('../controllers/roomController');
const auth = require('../middleware/authMiddleWare');

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(auth.protect, roomController.createRoom);

router.route('/search').get(roomController.getRoomBySearchParam);

router
  .route('/upload')
  .post(upload.array('images', 5), roomController.uploadImage);

router
  .route('/:id')
  .get(auth.protect, roomController.getRoom)
  .patch(auth.protect, roomController.updateRoom)
  .delete(auth.protect, roomController.deleteRoom);

module.exports = router;
