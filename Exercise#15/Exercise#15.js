var guset_list = ["kamiran", "Waseem", "Siraj"];
console.log("My friend ", guset_list[1], ", can't make the dinner with us.");
guset_list[1] = "Umair";
for (var _i = 0, guset_list_1 = guset_list; _i < guset_list_1.length; _i++) {
    var x = guset_list_1[_i];
    console.log("Dear friend ", x, ", you invited for dinner");
}
var info_message = "Dear," + guset_list[1] + "I found abigger dinner table.";
console.log(info_message);
guset_list.unshift("Amjad");
console.log(guset_list);
guset_list.splice(2, 0, "Zeeshan");
console.log(guset_list);
guset_list.push("Gulshan");
console.log(guset_list);
for (var _a = 0, guset_list_2 = guset_list; _a < guset_list_2.length; _a++) {
    var x = guset_list_2[_a];
    console.log("Dear friend ", x, ", you invited for dinner");
}
