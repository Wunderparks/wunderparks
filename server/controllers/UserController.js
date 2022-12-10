const mongoose = require('mongoose');
const User = require('../models/userModel.js');

const userController = {};

// Get parks completed for icon coloring on landing page
userController.getParks = (req, res, next) => {
  // Placeholder 'wunderpus' for finding the user
  // Change this if it's not the name of the user in the database/if we end up adding more users
  User.findOne({ name: 'Wunderpus' })
    .then((user) => {
      if (user) {
        res.locals.parks = user;
        return next();
      }
    })
    .catch((err) => {
      console.log('User not found');
      return next({ message: 'Error in getParks' });
    });
};

// Getting user info for top of each modal (name, description, rating, etc.)
userController.getUser = (req, res, next) => {
  User.findOne({ name: 'Wunderpus' })
    .then((user) => {
      if (user) {
        res.locals.user = user;
        next();
      }
    })
    .catch((err) => {
      console.log('User not found');
      next({ message: 'Error in getUser' });
    });
};

module.exports = userController;
