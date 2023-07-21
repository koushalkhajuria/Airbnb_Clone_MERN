const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log('Error Connecting to DB:', err));

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
