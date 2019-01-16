const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

// DB config
const db = require('./config/keys_dev').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));