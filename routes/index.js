var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post(':gameID/join', function (req, res, next) {
  // add new player to game in lobby
});

router.post('/:gameID/start', function (req, res, next) {
  // initialize game
});

router.post('/:gameID/message', function (req, res, next) {
  // add message to current turn
});
router.post('/:gameID/message/:messageID', function (req, res, next) {
  // respond to message
});
router.post('/:gameID/vote', function (req, res, next) {
  // enter vote for this round
});

router.get('/:gameID', function (req, res, next) {
  // get game status
  // includes:
  // turn type (message/respond/vote)
  // visible messages
  // election winners
});

module.exports = router;
