var messages = require('./message');

exports.index = function(req, res){
  res.render('index', { title: 'Express', messages: messages });
};