var express = require('express');
var router = express.Router();

/* GET citiespage. */
router.get('/', function(req, res) {
	res.render('cities', { title: 'Spring Cloud App' });
});

module.exports = router;
