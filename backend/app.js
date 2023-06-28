const bodyParser = require('body-parser');
const express = require('express');

const indexRouter = require('./routes/index');
const foodRouter = require('./routes/food');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/food', foodRouter);

// error handler
app.use(function(error, req, res, next) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});
app.listen(8080);