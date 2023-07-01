const bodyParser = require('body-parser');
const express = require('express');

const indexRouter = require('./routes/index');
const foodRouter = require('./routes/food');
const eventRouter = require('./routes/events');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(authRoutes);
app.use('/food', foodRouter);
app.use('/events', eventRouter);

// error handler
app.use(function(error, req, res, next) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});
app.listen(8080);