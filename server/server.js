const express = require('express');
const cors = require('cors');
const path = require('path');
const userController = require('./controllers/UserController');

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.static('build'));
// app.use(express.static(path.resolve(__dirname, '../client/public/index.html')));

app.get('/parks', userController.getParks, (_req, res) => {
  return res.status(200).json(res.locals.parks);
});

/**
 * TODO
 *
 *
 */

// Handle serving of static files
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (_req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use((_req, res) => res.sendStatus(404));

app.use((err, _req, res) => {
  const defaultErr = {
    log: 'Caught Unknown middleware error.',
    status: 500,
    message: { err: 'An unknown error occured.' },
  };
  const { log, status, message } = Object.assign(defaultErr, err);
  console.log(log);
  return res.status(status).send(message);
});

console.log('listening on 3000...');
app.listen(3000);
