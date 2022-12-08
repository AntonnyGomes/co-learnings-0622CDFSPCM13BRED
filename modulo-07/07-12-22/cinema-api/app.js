var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

var apiRouter = require('./routes/api');
var ErrorHandlerMiddleware = require('./src/middlewares/ErrorHandlerMiddleware');
var ErrorHandlerUnauthorizedMiddleware = require('./src/middlewares/ErrorHandlerUnauthorizedMiddleware');
var ErrorHandlerNotFoundMiddleware = require('./src/middlewares/ErrorHandlerNotFoundMiddleware');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/', apiRouter());
app.use(ErrorHandlerUnauthorizedMiddleware);
app.use(ErrorHandlerNotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

module.exports = app;
