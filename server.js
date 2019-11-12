const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const User = require('./models/User');
require('dotenv').config();
const db = require('./config/keys').MONGO_DB;
require('./config/Passport')(passport);



const user = require('./routes/api/user');
const admin = require('./routes/api/admin');
const dashboard = require('./routes/api/dashbord');


const app = express();



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.serializeUser((user, done) => {done(null, user.id)});
passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));


// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)) 


// Routes
  app.use('/api/user', user);
  app.use('/api/admin', admin);
  app.use('/api/dashboard', dashboard);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));