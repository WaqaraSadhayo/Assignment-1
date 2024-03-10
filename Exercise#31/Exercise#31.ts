// List of current users
const currentUsers: string[] = ["John", "ALice", "Bob", "Charlie", "Eve"];

// List of new users
const newUsers: string[] = ["Alice", "Dave", "john", "Mallory", "Bob"];

// Check for unique usernames
for (const x of newUsers) {
    const isUsernameTaken = currentUsers.some(username => username.toLowerCase() === x.toLowerCase());
    console.log(`The username '${x}' is ${isUsernameTaken ? 'not available' : 'available'}.`);
}
