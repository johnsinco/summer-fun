var express = require('express');
var router = express.Router();
const Player = require('../server/models').Player;

/* GET players listing. */
router.get('/', function(req, res, next) {
  return Player
    .all()
    .then(players => res.json(players))
    .catch(err => res.status(500).send(err))
  // res.json([
  //   {id: 1, firstName: "Jane", lastName: "Doe", accountId: 7},
  //   {id: 2, firstName: "Bill", lastName: "Baggins", accountId: 12}
  // ]);
});

router.post('/', function(req, res, next) {
  res.status(201).send('created')
});

router.get('/:id', function(req, res, next) {
  res.json({
    id: 1, firstName: "Jane", lastName: "Doe", accountId: 7
  })
})

router.route('/:id/challenges')
  .get(function(req, res, next) {
    res.json([
      {id: 1, name: 'Read 10 books', status: 'in progress'},
      {id: 2, name: 'Hike a Fourteener', status: 'complete'}
    ])
  })
  .post(function(req, res, next) {
    res.send('created')
  })

module.exports = router;
