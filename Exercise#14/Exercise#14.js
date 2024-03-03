var guset_list = ["kamiran", "Waseem", "Siraj"];
console.log("My friend ", guset_list[1], ", can't make the dinner with us.");
guset_list[1] = "Umair";
for (var _i = 0, guset_list_1 = guset_list; _i < guset_list_1.length; _i++) {
    var x = guset_list_1[_i];
    console.log("Dear friend ", x, ", you invited for dinner");
}
