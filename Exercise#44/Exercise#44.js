function car_info(manufacturer, model, color, price) {
    var car = {
        "Manufacturer": manufacturer,
        "Model_Name": model,
    };
    if (color !== undefined && price !== undefined) {
        car["Color"] = color;
        car["Price"] = price;
    }
    else if (color !== undefined) {
        car["Color"] = color;
    }
    else if (price !== undefined) {
        car["Price"] = price;
    }
    return console.log(car);
}
car_info("Honda", "2018");
car_info("Kia", "2023", "Yellow");
car_info("Rolls Royce", "2022", "Pink", "1280000000");
