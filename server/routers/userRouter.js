const express = require('express');
const userController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.get('/', userController.getParks, (_req, res) => {
  return res.status(200).json(res.locals.parks);
});

// userRouter.use();

module.exports = userRouter;
