const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./routers/userRouter');
const NPSRouter = require('./routers/NPSRouter');
const { default: mongoose } = require('mongoose');

const app = express();

const MONGO_URI =
  'mongodb+srv://Wunder:wunderpus@wunder.ldeokyo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI);

app.use(express.json());
app.use(cors());

// Set up routers for '/NPS'
app.use('/NPS', NPSRouter);

// Set up routers for '/user'
app.use('/user', userRouter);

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
  console.log('ERROR: ', log);
  return res.status(status).send(message);
});

console.log('listening on 3000...');
app.listen(3000);
