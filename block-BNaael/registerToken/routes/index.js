var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send('index');
});

module.exports = router;
