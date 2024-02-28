let person1:string = "Waqar Ahmed";

let upp_name:string = person1.toUpperCase();
console.log("The name is in Upper case: " + upp_name);

let low_name:string = person1.toLowerCase();
console.log("The name is in Lower case: " + low_name);

let titlecaseName: string = person1.replace(/\b\w/g, (match) => match.toUpperCase());
console.log("Titlecase:", titlecaseName);
