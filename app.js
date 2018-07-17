var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var challengesRouter = require('./routes/challenges');

var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("allowing all origin");
  next();
});

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/challenges', challengesRouter);

module.exports = app;
