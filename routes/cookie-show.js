var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
  res.send('Showing cookies... See log...');
});

module.exports = router;
