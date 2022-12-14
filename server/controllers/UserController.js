const mongoose = require('mongoose');
const User = require('../models/userModel.js');

const bcrypt = require('bcryptjs');

const userController = {};

// Create a new user in the database
userController.createUser = async (req, res, next) => {
  console.log('reqbody', req.body);
  console.log(res.locals);
  try {
    if (res.locals.user) {
      // if res.locals.user is defined, then user w/ username exists already
      return next({
        log: 'userController.createUser',
        status: 400,
        message: { err: 'Username Taken' },
      });
    }
    console.log('create user', req.body);
    const salt = await bcrypt.genSalt(10);
    const { name, username, password } = req.body;
    const hashPW = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      username,
      password: hashPW,
      parksVisited: {},
    });
    res.locals.newUser = user; // <-- send back all user info
    return next();
  } catch (err) {
    return next(err);
  }
};

// Get user info
userController.getUser = (req, res, next) => {
  // User.findOne({ name: 'Aalok' })
  const checkUsername = req.body.username;
  User.findOne({ username: checkUsername })
    .then((user) => {
      if (user) {
        //will be null if cannot find user w/ username
        res.locals.user = user; // persist user info if found
      }
      return next();
    })
    .catch((err) => {
      console.log('User not found');
      return next({ message: 'Error in getUser' });
    });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return next({
          log: 'userController.verifyUser',
          status: 400,
          message: { err: 'Wrong username or password' },
        });
      } else {
        const hashPW = user.password;
        bcrypt.compare(password, hashPW, (err, passMatch) => {
          //check password w/ bcrypt
          if (passMatch) {
            res.locals.user = user; //persist user info through rest of middleware
            return next(); // returns true if password matches hashPW
          } else {
            return next({
              log: 'userController.verifyUser',
              status: 400,
              message: { err: 'Wrong username or password' },
            });
          }
        });
      }
    })
    .catch((err) => {
      return next({ message: 'Error in verifyUser' });
    });
};

// Add a park to a user's completed parks
userController.addPark = async (req, res, next) => {
  try {
    const parkCode = req.params.parkCode;
    const newPark = {
      date: req.body.date,
      notes: req.body.notes,
      activitiesCompleted: req.body.activitiesDone,
    };
    // const user = await User.findOne({ name: req.body.name})
    const user = await User.findOne({ name: 'Aalok' });
    if (user) {
      const parksVisited = { ...user.parksVisited, [parkCode]: newPark };
      user.parksVisited = parksVisited;
      const newUser = await user.save();
      console.log(newUser);
    }
    res.locals.park = user.parksVisited[parkCode]; // <-- send back the newly added park's info
    return next();
  } catch (err) {
    return next(err);
  }
};

// Get parks completed array for icon coloring on landing page
userController.getParks = (req, res, next) => {
  // User.findOne({ name: req.body.name})
  const myUsername = res.locals.user.username;
  User.findOne({ username: myUsername })
    .then((user) => {
      res.locals.parks = Object.keys(user.parksVisited); // <-- send back array of parks completed
      return next();
    })
    .catch((err) => {
      return next({ message: 'Error in getParks' });
    });
};

// Get user's park-specific info for top of modal display
userController.getParkInfo = (req, res, next) => {
  try {
    // console.log(req.params);
    const { parkCode } = req.params;
    const { parksVisited } = res.locals.user;
    // console.log(parkCode);
    console.log(parksVisited);
    res.locals.parkInfo = parksVisited[parkCode];
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
