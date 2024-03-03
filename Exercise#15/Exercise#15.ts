var guset_list = ["kamiran", "Waseem", "Siraj"];
console.log("My friend ",guset_list[1],", can't make the dinner with us.");

guset_list[1] = "Umair";

for (const x of guset_list) {
    console.log("Dear friend ", x , ", you invited for dinner");
}

var info_message = "Dear,"+ guset_list[1] +"I found abigger dinner table.";
console.log(info_message);

guset_list.unshift("Amjad");
console.log(guset_list);

guset_list.splice(2, 0, "Zeeshan" );
console.log(guset_list);

guset_list.push("Gulshan"); // Apend is not accessible in Typescript.
console.log(guset_list);

for (const x of guset_list) {
    console.log("Dear friend ", x , ", you invited for dinner");
}