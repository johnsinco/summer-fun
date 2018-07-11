var express = require('express');
var router = express.Router();

/* GET organization listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: "Springfield Rec" postcode: '66666'},
    {id: 2, name: "Church of the Hills" postcode: '99999'},
  ]);
});

router.post('/', function(req, res, next) {
  res.status(201).send('created')
});

router.get('/:id', function(req, res, next) {
  res.json({id: 1, name: "Springfield Rec" postcode: '66666'})
})

router.get('/:id/leaderboard', function(req, res, next) {
    res.json([
      {name: "Wilma F.", points: 202},
      {name: "Dave P.", points: 128},
    ])
  })

router.route('/:id/accounts')
  .get(function(req, res, next) {
    res.json([
      {name: "Parent One", id: 1},
      {name: "Parent Two", id: 2}
    ])
  })

module.exports = router;
