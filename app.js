require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const passportJwt = require('passport-jwt').Strategy;
require('./config/auth');

const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');
const challengesRouter = require('./routes/challenges');
const familyRouter = require('./routes/family');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* passport auth */
// app.use(session({ secret: "bleeg blorgh" }));
app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
//   var user = {name: 'The Dude', id: 7}
//   done(null, user)
// });
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     var demou = 'demo'
//     var demop = 'password'
//     if (username == demou && password == demop) {
//       return done(null, {id: 7, name: 'Foo Bar'})
//     } else {
//       return done(null, false, {message: "BAD LOGIN!"})
//     }
//     return done({message: "ERROR!"})
//   }
// ));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("allowing all origin");
  next();
});

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/challenges', challengesRouter);
app.use('/family', familyRouter);

module.exports = app;
