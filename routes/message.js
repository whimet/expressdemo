var messages = {};
var tokenizer = require('./tokenizer');
var firebase = require('../app/firebase');

firebase.listenForMessages(function (snapshot) {
    messages = snapshot;
});

exports.list = function (req, res) {
    var result = [];
    for (var ref in messages) {
        result.push(messages[ref]);
    }
    res.send(result);
};

exports.view = function (req, res) {
    res.send(messages[req.params.id]);
};

exports.create = function (req, res) {
    var tokens = tokenizer.parse(req.body.message);
    var meta = {user: req.user, timestamp: new Date(), users: tokens.users, categories: tokens.categories};
    var ref = firebase.addMessage({'message': req.body.message, 'meta': meta});
    console.log('new message created: ' + ref.name() + ' by ' + req.user);
    res.status(201).send(req.path + '/' + ref.name());
};