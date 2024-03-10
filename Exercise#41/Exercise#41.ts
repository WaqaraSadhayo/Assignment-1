const magicians: string[] =["Harry Houdini", "David Blaine", "Doug Henning", "Dynamo", "Criss Angel","Michael Ammar"];

function make_great() {
    for (const x of magicians) {
        console.log(`${x} the Great.`);
    }
}
make_great();

// Call show_magicians() to see that the list has actually been modified.
console.log("This is the original Array:");
function show_magicians() {
    for (const x of magicians) {
        console.log(x);
    }
    
}
show_magicians();








export{}