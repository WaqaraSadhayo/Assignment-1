var usernames = [];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var x = usernames_1[_i];
    if (x == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ", x, "thank you for logging in again. ");
    }
}
if (usernames.length == 0) {
    console.log("List is Empty");
}
else {
    console.log("The list is not an empty");
}
