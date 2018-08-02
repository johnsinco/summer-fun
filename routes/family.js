var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET family players */
router.get('/',
 passport.authenticate('local', {
   failureRedirect: '/login',
   successRedirect: '/family'
 }),
 function(req, res, next) {
  res.json([
    {id: 1, firstName: "Jason", lastName: "Jones"},
    {id: 2, firstName: "Jane", lastName: "Jackson"}
  ]);
});

module.exports = router;
