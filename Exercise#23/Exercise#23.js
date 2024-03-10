"use strict";
// 1.Tests for equality and inequality with strings
let str1 = "abcd";
let str2 = "abcd";
if (str1 == str2 && str2 == str1) {
    console.log("Str1 and Str2 both are equal");
}
else if (str1 != str2 && str2 != str1) {
    console.log("Str1 and Str2 are different");
}
else {
    console.log("Invalid string");
}
// 2.Tests using the lower case function;
let str = "Saddff";
console.log((str == str.toLowerCase()));
// 3.Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 5;
if (num1 == num2 && num2 == num1) {
    console.log("num1 and num2 both are equal");
}
else if (num1 > num2 && num2 < num1) {
    console.log("num1 is greater than num2");
}
else if (num2 > num1 && num1 < num2) {
    console.log("num2 is greater than num1");
}
else {
    console.log("Invalid number");
}
//4. Tests using "and" and "or" operators
let ages = 35;
console.log((ages >= 18) && (ages <= 42) ? 'you can apply for Pak Army.' : 'You are not eligible.');
// 5. Test whether an item is in a array
//6. Test whether an item is not in a array
let item = [1, 3, 'a', 'b'];
console.log(item, " This Item is ", (Array.isArray(item)) ? "an array" : "not an array");
