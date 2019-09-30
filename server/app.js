//Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routers
const userRoute = require('./routes/userRoutes');

// dotenv config
dotenv.config();

// Initializing express
const app = express();

//Database Connection
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully`);
  })
  .catch(err => {
    console.log(`Database not connecting: Error => ${err}`);
  });

//Middle Wares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Middle Wares
app.use('/api/users', userRoute);

//Default route to check Api
app.get('/', (req, res) => {
  res.status(200).send(`App Works`);
});

//Listening to server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
