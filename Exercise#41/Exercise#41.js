"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["Harry Houdini", "David Blaine", "Doug Henning", "Dynamo", "Criss Angel", "Michael Ammar"];
function make_great() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var x = magicians_1[_i];
        console.log("".concat(x, " the Great."));
    }
}
make_great();
// Call show_magicians() to see that the list has actually been modified.
console.log("This is the original Array");
function show_magicians() {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var x = magicians_2[_i];
        console.log(x);
    }
}
show_magicians();
