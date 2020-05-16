const express = require('express')
const voterController = require('../controllers/restaurants')
const router = express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next();
});

router.post('/', voterController.firstVote )

router.put('/', voterController.restaurantVoter )

router.get('/', voterController.getAllVotes)

module.exports = router