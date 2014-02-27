var firebase = require('../app/firebase');
var users = {};

firebase.listenForUsers(function (snapshot) {
    users = snapshot;
});

exports.authenticate = function (username, password) {
    for (var ref in users) {
        var user = users[ref];
        console.log(user);
        if(username == user.username && password == user.password) {
            return true;
        }
    }
    return false;
};