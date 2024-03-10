const usernames: string[]= ["Waqar", "Waseem", "Admin", "Amjad", "Wajid", "Umair"]
for (const x of usernames) {
    if (x == "Admin") {
        console.log("Hello admin, would you like to see a status report?");

    }
    else {
        console.log("Hello ", x, "thank you for logging in again. ");
    }
   
}

if (usernames.length == 0) {
    console.log("List is Empty")

}
else {
    console.log("The list is not an empty")
}