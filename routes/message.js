var messages = [];
var tokenizer = require('./tokenizer');

exports.list = function(req, res) {
	res.send(messages);
}

exports.create = function(req, res) {
	var tokens = tokenizer.parse(req.body.message);
	var ua = req.headers['user-agent'];
	var meta = {'user-agent': ua, 'users': tokens.users, 'categories': tokens.categories};
	messages.push({'message': req.body.message, 'timestamp': new Date(), 'meta': meta});
	console.log(new Date() + ': ' + req.body.message);
	res.send(201);
}