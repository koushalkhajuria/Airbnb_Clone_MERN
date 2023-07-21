const Room = require('../models/roomModel');

exports.getAllRooms = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const query = Room.find(queryObj);
    const rooms = await query;
    res.status(200).json({
      status: 'success',
      result: rooms.length,
      data: rooms
    });
  } catch (err) {
    res.status(404).json({
      status: 'Not found',
      message: err
    });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: room
    });
  } catch (err) {
    res.status(404).json({
      status: 'Not found',
      message: err
    });
  }
};

exports.getRoomBySearchParam = async (req, res) => {
  try {
    const { country, startDate, endDate, guestCapacity } = req.query;
    const query = {};
    if (country) {
      query['location.country'] = country;
    }
    if (startDate) {
      query['stayDate.startDate'] = { $lte: new Date(startDate) };
    }
    if (endDate) {
      query['stayDate.endDate'] = { $gte: new Date(endDate) };
    }
    if (guestCapacity > 0) {
      query.guestCapacity = { $gte: guestCapacity };
    }
    const data = await Room.find(query);
    res.status(200).json({
      status: 'success',
      result: data.length,
      data: data
    });
  } catch (err) {
    res.status(404).json({
      status: 'Not found',
      message: err
    });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'You are now a host',
      data: {
        room: newRoom
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Unexpected err, try after some time',
      data: err
    });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    if (req.body.stayDate) {
      const { stayDate } = req.body;
      const room = await Room.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            'stayDate.startDate': stayDate.startDay,
            'stayDate.endDate': stayDate.endDay
          }
        },
        {
          new: true,
          runValidators: true
        }
      );
      res.status(200).json({
        status: 'success',
        message: 'Dates Updated',
        data: room
      });
    } else if (req.body.pricing) {
      const { pricing } = req.body;
      const room = await Room.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            'pricing.basePrice': pricing.basePrice,
            'pricing.cleaningFee': pricing.cleaningFee,
            'pricing.serviceFee': pricing.serviceFee
          }
        },
        {
          new: true,
          runValidators: true
        }
      );
      res.status(200).json({
        status: 'success',
        message: 'Prices Updated',
        data: room
      });
    } else {
      const { host } = req.body;
      const room = await Room.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            host: host
          }
        },
        {
          new: true,
          runValidators: true
        }
      );
      res.status(200).json({
        status: 'success',
        message: 'Profile Updated',
        data: room
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'Deleted Successfully',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
