"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicians = void 0;
exports.magicians = ["Harry Houdini", "David Blaine", "Doug Henning", "Dynamo", "Criss Angel", "Michael Ammar"];
function show_magicians() {
    for (var _i = 0, magicians_1 = exports.magicians; _i < magicians_1.length; _i++) {
        var x = magicians_1[_i];
        console.log(x);
    }
}
show_magicians();
