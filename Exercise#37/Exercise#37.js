function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city.toUpperCase() + " is located in " + country.toUpperCase());
}
describe_city("karachi");
describe_city("Shikarpur");
// at least one of which is not in the default country.
describe_city("Dehli", "India");
