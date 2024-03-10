// List of current users
var currentUsers = ["John", "ALice", "Bob", "Charlie", "Eve"];
// List of new users
var newUsers = ["Alice", "Dave", "john", "Mallory", "Bob"];
// Check for unique usernames
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var x = newUsers_1[_i];
    var isUsernameTaken = currentUsers.includes(x.toLowerCase());
    console.log("The username '".concat(x, "' is ").concat(isUsernameTaken ? 'not available' : 'available', "."));
}
