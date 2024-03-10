"use strict";
var guset_list = ["kamiran", "Waseem", "Siraj"];
console.log("My friend ", guset_list[1], ", can't make the dinner with us.");
guset_list[1] = "Umair";
for (const x of guset_list) {
    console.log("Dear friend ", x, ", you invited for dinner");
}
var info_message = "Dear," + guset_list + "I found abigger dinner table.";
console.log(info_message);
guset_list.unshift("Amjad");
console.log(guset_list);
guset_list.splice(2, 0, "Zeeshan");
console.log(guset_list);
guset_list.push("Gulshan"); // Apend is not accessible in Typescript.
console.log(guset_list);
for (const x of guset_list) {
    console.log("Dear friend ", x, ", you invited for dinner");
}
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var info_message = "\nDear," + guset_list + "I can invite only two people for dinner table.\n";
console.log(info_message);
console.log("Dear friend, " + guset_list[5] + " sorry I cannaot invite you for dinner\n");
guset_list.pop();
console.log(guset_list);
console.log("Dear friend, " + guset_list[4] + " sorry I cannaot invite you for dinner\n");
guset_list.pop();
console.log(guset_list);
console.log("Dear friend, " + guset_list[3] + " sorry I cannaot invite you for dinner\n");
guset_list.pop();
console.log(guset_list);
console.log("Dear friend, " + guset_list[2] + " sorry I cannaot invite you for dinner\n");
guset_list.pop();
console.log(guset_list);
for (const x of guset_list) {
    console.log("Dear friend ", x, ", you are still invited for dinner");
}
// For empty the list
guset_list.pop();
guset_list.pop();
console.log(guset_list);
