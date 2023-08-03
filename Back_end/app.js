const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const roomRouter = require('./routes/roomRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const bookingRouter = require('./routes/bookingRoutes');

const app = express();

app.use(bodyParser.json({ limit: '20mb' }));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    // 'http://localhost:3000'
    'https://main--mern-stack-clone.netlify.app'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(cookieParser());

app.use('/api/v1', authRouter);
app.use('/api/v1', roomRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', bookingRouter);

module.exports = app;
