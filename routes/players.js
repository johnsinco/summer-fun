var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, firstName: "Jane", lastName: "Doe", accountId: 7},
    {id: 2, firstName: "Bill", lastName: "Baggins", accountId: 12}
  ]);
});

router.get('/:id', function(req, res, next) {
  res.json({
    id: 1, firstName: "Jane", lastName: "Doe", accountId: 7
  })
})

module.exports = router;
