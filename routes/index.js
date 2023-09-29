var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const order = {
    id: 1,
    number: 1231,

  }
  res.render('new-order-created', { order });
});

module.exports = router;
