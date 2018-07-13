var express = require('express');
var router = express.Router();

/* GET challenges listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: "Read 10 hours"},
    {id: 2, name: "Hike 5 miles"},
  ]);
});

router.post('/', function(req, res, next) {
  res.status(201).send('created')
});

router.get('/:id', function(req, res, next) {
  res.json({id: 1, name: "Climb a Fourteener"})
})

module.exports = router;
