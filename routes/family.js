var express = require('express');
var router = express.Router();

/* GET family players */
router.get('/:id', function(req, res, next) {
  res.json([
    {id: 1, firstName: "Jason", lastName: "Jones"},
    {id: 2, firstName: "Jane", lastName: "Jackson"}
  ]);
});

module.exports = router;
