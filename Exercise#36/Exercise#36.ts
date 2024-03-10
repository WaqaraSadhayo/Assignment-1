function make_shirts(size:string = "Large", message:string = "\"I Love Typescript\"") {
    console.log("Size: "+size.toUpperCase()+", Message: "+message);
    
 }
 make_shirts();

 make_shirts("medium");

 make_shirts("small", "\"Live like a barve man\"");
export{}