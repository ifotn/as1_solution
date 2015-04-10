var express = require('express');
var router = express.Router();
var url = require('url');
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {

	var result;

	var query = url.parse(req.url, true).query; 

	//parse out the birthyear value
	var method = query.method;
	var x = query.x; 
	var y = query.y;

	if (method == 'add') {
		result = parseInt(x) + parseInt(y);
	}
	else if (method == 'subtract') {
		result = parseInt(x) - parseInt(y);
	}
	else if (method == 'multiply') {
		result = parseInt(x) * parseInt(y);
	}
	else if (method == 'divide') {
		result = parseInt(x) / parseInt(y);
	}
	else {
		result = 'Error: result cannot be determined';
	}

	//console.log('result: ' + result.toString());
	res.render('calculator', { title: 'Assignment 1', method: method, result: result.toString() });
});

module.exports = router;
