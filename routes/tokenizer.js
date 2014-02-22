exports.parse = function (message) {
    var users = [];
    var categories = [];

    var tokens = message.split(" ");
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].indexOf("@") == 0) {
            users.push(tokens[i]);
        } else if (tokens[i].indexOf("#") == 0) {
            categories.push(tokens[i]);
        }
    }

    return {'users': users, 'categories': categories};
};