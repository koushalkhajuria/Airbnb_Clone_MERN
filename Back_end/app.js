const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const roomRouter = require('./routes/roomRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const bookingRouter = require('./routes/bookingRoutes');

// const upload = multer({ dest: 'uploads/' });
const app = express();

app.use(bodyParser.json({ limit: '20mb' }));

// app.use(express.json({ limit: '10mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials (e.g., cookies)

  next();
});

app.use(cookieParser());

app.use('/api/v1', authRouter);
app.use('/api/v1', roomRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', bookingRouter);

module.exports = app;

// const cors = require('cors')
// const bodyParser = require('body-parser');
// let {dbConnect,getData, insertData, updateData, deleteData} = require('./controllers/dbcontroller');
// const { ObjectId } = require('mongodb');

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.use(cors())

// app.get('/',async (req,res)=>{

//     res.send("Listing")
// } )

// // ******************************************************* HOST DATA *********************************************
// app.get('/becomehost', async(req,res) => {
//     let query = {}
//     let collection = "host_data";
//     let output = await getData(collection,query);
//     res.send(output)
// })

// app.post('/becomehost', async(req,res) => {
//     let payload = req.body;
//     console.log(req.body)
//     let collection = "host_data";
//     let output = await insertData(collection,payload);
//     res.send(output)
// })

// app.put('/becomehost/onboarding/:id', async(req,res) => {
//     let id = req.params.id;
//     let payload = req.body;
//     console.log(req.body)
//     let collection = "host_data";
//     let output = await updateData(collection,payload,id);
//     res.send(output)
// })

// // *************************************** AIRBNB Rooms ******************************************
// app.get('/room/:id', async(req,res) => {
//     let collection = "host_data";
//     let query = {_id: new ObjectId(req.params.id)}
//     let output = await getData(collection,query);
//     res.send(output)
// })

// app.post('/room/book/stays/:id', async(req,res) => {
//     let payload = req.body;
//     payload.hostId = req.params.id
//     let collection = "bookings";
//     let output = await insertData(collection,payload);
//     res.send(output)
// })

// // ***************************************  Search ******************************************
// app.get('/quicksearch', async(req,res) => {
//     let collection = "host_data";
//     let query = req.query
//     let output = await getData(collection,query);
//     res.send(output)
// })

// // app.post('/search', async(req,res) => {
// //     let payload = req.body;
// //     payload.hostId = req.params.id
// //     let collection = "bookings";
// //     let output = await insertData(collection,payload);
// //     res.send(output)
// // })

// // *************************************** SIGNING IN USERS ******************************************
// app.get('/user', async(req,res) => {
//     let query = {}
//     let collection = "user";
//     let output = await getData(collection,query);
//     res.send(output)
// })

// app.post('/signup', async(req,res) => {
//     let payload = req.body;
//     console.log(req.body)
//     let collection = "user";
//     let output = await insertData(collection,payload);
//     res.send(output)
// })

// // app.delete('/airbnb/:id', async(req,res) => {
// //     let id = req.params;
// //     let collection = "airbnb";
// //     let output = await deleteData(collection,id);
// //     res.send(output)
// // })

// const getAllListing = (req,res) =>{
//     res.status(200).res.json(
//         {
//             status: success,
//             data: {Yes}
//         }
//     )
// }

// const getOneList = (req,res) =>{
//     const id = req.params.id
//     res.status(200).res.json({
//         status:success,
//         data: {id }
//     })
// }

// app.get('/api/v1/', getAllListing)
// app.get('/api/v1/rooms/:id', getOneItem)
