function displayCar(car)
{
    window.	console.log("You own a " + car[0] + " " + car[1] + ".");
    car[0] = "Chevy";
} 

var vehicle = ["Honda", "Civic"];

displayCar(vehicle);
window.console.log(vehicle[0]);
