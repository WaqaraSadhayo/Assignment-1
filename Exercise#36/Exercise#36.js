"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "\"I Love Typescript\""; }
    console.log("Size: " + size.toUpperCase() + ", Message: " + message);
}
make_shirts();
make_shirts("medium");
make_shirts("small", "\"Live like a barve man\"");
