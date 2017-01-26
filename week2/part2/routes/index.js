var express = require('express');
var router = express.Router();

// TODO: Messages

// TODO: GET /message

// TODO: POST /message

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
