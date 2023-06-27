var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.cookie('name', 'express').send('cookie set');
});

module.exports = router;
