var usernames2 = ["Waqar", "Waseem", "Admin", "Amjad", "Wajid", "Umair"];
for (var _i = 0, usernames2_1 = usernames2; _i < usernames2_1.length; _i++) {
    var x = usernames2_1[_i];
    if (x == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ", x, "thank you for logging in again. ");
    }
}
if (usernames2.length == 0) {
    console.log("List is Empty");
}
else {
    console.log("The list is not an empty");
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
usernames2.pop();
usernames2.pop();
usernames2.pop();
usernames2.pop();
usernames2.pop();
usernames2.pop();
if (usernames2.length == 0) {
    console.log("We need to find some users!"); // Now the list is Empty
}
else {
    console.log("The list is not an empty");
}
