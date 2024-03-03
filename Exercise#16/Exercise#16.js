var guset_list = ["kamiran", "Waseem", "Siraj"];
console.log("My friend ", guset_list[1], ", can't make the dinner with us.");
guset_list[1] = "Umair";
for (var _i = 0, guset_list_1 = guset_list; _i < guset_list_1.length; _i++) {
    var x = guset_list_1[_i];
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
for (var _a = 0, guset_list_2 = guset_list; _a < guset_list_2.length; _a++) {
    var x = guset_list_2[_a];
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
for (var _b = 0, guset_list_3 = guset_list; _b < guset_list_3.length; _b++) {
    var x = guset_list_3[_b];
    console.log("Dear friend ", x, ", you are still invited for dinner");
}
guset_list.pop();
guset_list.pop();
console.log(guset_list);
