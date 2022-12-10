const axios = require('axios');

const API_KEY = 'btQCAT4O0selRfC9gtES2mS0u149qPEhBxOuNU8i';
const NPSController = {};

NPSController.getParkCodes = async (_req, res, next) => {
  try {
    const result = await axios.get(
      `http://developer.nps.gov/api/v1/parks?api_key=${API_KEY}&limit=638`
    );
    const parkCodes = {};
    for (const park of result.data.data) {
      parkCodes[park.name] = park.parkCode;
    }
    res.locals.parkCodes = parkCodes;
    return next();
  } catch (err) {
    return next(err);
  }
};

NPSController.getPark = async (req, res, next) => {
  try {
    const { parkCode } = req.params;
    const result = await axios.get(
      `http://developer.nps.gov/api/v1/parks?api_key=${API_KEY}&parkCode=${parkCode}`
    );
    res.locals.parkData = result.data.data[0];
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = NPSController;
