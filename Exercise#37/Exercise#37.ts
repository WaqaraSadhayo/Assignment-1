function describe_city(city:string, country:string = "Pakistan") {
    console.log(city.toUpperCase() + " is located in " + country.toUpperCase())
    
}
describe_city("karachi");

describe_city("Shikarpur");

// at least one of which is not in the default country.
describe_city("Dehli", "India");