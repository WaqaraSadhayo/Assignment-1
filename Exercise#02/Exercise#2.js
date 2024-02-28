var person1 = "Waqar Ahmed";
var upp_name = person1.toUpperCase();
console.log("The name is in Upper case: " + upp_name);
var low_name = person1.toLowerCase();
console.log("The name is in Lower case: " + low_name);
var titlecaseName = person1.replace(/\b\w/g, function (match) { return match.toUpperCase(); });
console.log("Titlecase:", titlecaseName);
