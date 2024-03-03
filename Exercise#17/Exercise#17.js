var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var original_locations = ["Turkey", "Paris", "London", "Islamabad", "Sydney"];
console.log("Locations in its original forms are: ", original_locations);
var alpha_ordered_locations = __spreadArray([], original_locations, true).sort(); // for alpahabetical order.
console.log("\nLocations in alphabeticatical order: ", alpha_ordered_locations);
//your array is still in its original order.
console.log("\nLocations in its original forms are: ", original_locations);
var reverse_alpha_locations = alpha_ordered_locations.reverse(); // for reverse alpahabetical order
console.log("\nLocations in reverse alphabeticatical order: ", reverse_alpha_locations);
//your array is still in its original order.
console.log("\nLocations in its original forms are: ", original_locations);
var reverse_original_locations = original_locations.reverse(); //for reverse original orderedlocations
console.log("\nLocoations in its reverse original forms: ", reverse_original_locations);
// Again reverse the location reverse_original_locations.
reverse_original_locations.reverse(); //for reverse original orderedlocations
console.log("\nLocoations back  in its  original forms: ", reverse_original_locations);
