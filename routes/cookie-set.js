var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('cookie-set');
  res.cookie('name', 'express').send('cookie set');
});

module.exports = router;
