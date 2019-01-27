const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')

// routes
const users = require('./routes/api/users');
const items = require('./routes/api/items');

const app = express();



// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB config
const db = require('./config/keys').mongoURI;


// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)) 

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

passport.serializeUser(function(user, done) {
    done(null, user._id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


// Routes
app.use('/api/users', users);
app.use('/api/items', items);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));