var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var x = numbers_1[_i];
    if (x === 1) {
        console.log("".concat(numbers, "st"));
    }
    else if (x === 2) {
        console.log("".concat(x, "nd"));
    }
    else if (x === 3) {
        console.log("".concat(x, "rd"));
    }
    else {
        console.log("".concat(x, "th"));
    }
}
