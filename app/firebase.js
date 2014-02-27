var Firebase = require('firebase');
var firebase = new Firebase('https://radiant-fire-3603.firebaseio.com');

var users = firebase.child('users');
var messages = firebase.child('messages');

var onComplete = function (error, result) {
    if (error) {
        console.log("login failed.");
        console.log(error);
    } else {
        console.log("login succeeded.");
        console.log(result);
    }
};

var onCancel = function (error) {
    console.log("login cancelled.");
    console.log(error);
};

firebase.auth('O3jaBTui29jL226K4yTx7NOIQWmhlansJgqai4Lu', onComplete, onCancel);

exports.firebase = firebase;
exports.listenForMessages = function (listener) {
    messages.on('value', function (snapshot) {
        listener(snapshot.val());
    });
};

exports.addMessage = function (message) {
    return messages.push(message, function (error) {
        if (error) {
            console.log(error);
        }
    });
};

exports.listenForUsers = function (listener) {
    users.on('value', function (snapshot) {
        listener(snapshot.val());
    });
};

exports.addUser = function (user) {
    return users.push(user, function (error) {
        if (error) {
            console.log(error);
        }
    });
};