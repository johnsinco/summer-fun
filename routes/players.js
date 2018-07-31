var express = require('express');
var router = express.Router();
const Player = require('../models').Player;

/* GET players listing. */
router.get('/', function(req, res, next) {
  return Player
    .all()
    .then(players => res.json(players))
    .catch(err => res.status(500).send(err))
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  return Player.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  .then(newPlayer => res.status(201).json(newPlayer))
  .catch(error => res.status(500).send(error));
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
router.route('/:id/challenges/:id')
  .put(function(req, res, next) {
    console.log("setting challenge "+req.params.id+" to COMPLETE")
    res.status(200).json({foo: 'bar'})
  });


module.exports = router;
