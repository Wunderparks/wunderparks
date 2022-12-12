const express = require('express');
const NPSController = require('../controllers/NPSController');

const NPSRouter = express.Router();

NPSRouter.get('/parks', NPSController.getParkCodes, (_req, res) => {
  return res.status(200).send(res.locals.parkCodes);
});

NPSRouter.get('/parks/:parkCode', NPSController.getPark, (_req, res) => {
  return res.status(200).send(res.locals.parkData);
});

NPSRouter.get(
  '/modalInfo/:parkCode',
  NPSController.getPark,
  NPSController.getModalInfo,
  (_req, res) => {
    return res.status(200).json(res.locals.modalInfo);
  }
);

module.exports = NPSRouter;
