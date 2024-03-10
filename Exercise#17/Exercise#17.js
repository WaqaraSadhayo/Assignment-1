"use strict";
let original_locations = ["Turkey", "Paris", "London", "Islamabad", "Sydney"];
console.log("Locations in its original forms are: ", original_locations);
let alpha_ordered_locations = [...original_locations].sort(); // for alpahabetical order.
console.log("\nLocations in alphabeticatical order: ", alpha_ordered_locations);
//your array is still in its original order.
console.log("\nLocations in its original forms are: ", original_locations);
let reverse_alpha_locations = alpha_ordered_locations.reverse(); // for reverse alpahabetical order
console.log("\nLocations in reverse alphabeticatical order: ", reverse_alpha_locations);
//your array is still in its original order.
console.log("\nLocations in its original forms are: ", original_locations);
let reverse_original_locations = original_locations.reverse(); //for reverse original orderedlocations
console.log("\nLocoations in its reverse original forms: ", reverse_original_locations);
// Again reverse the location reverse_original_locations.
reverse_original_locations.reverse(); //for reverse original orderedlocations
console.log("\nLocoations back  in its  original forms: ", reverse_original_locations);
