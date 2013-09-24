// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(myJob, location, parent, kids){
		var result = "You will be a " + myJob + " in " + location + ", and married to " + parent + " with " + kids + " kids" ;
		console.log(result);
}
tellFortune("Walli", "Mars", "Eva", 0);
tellFortune("guy", "Here", "her", 1);
tellFortune("Developer", "Toronto", "my wife", 2);

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birthYear, currentYear){
var age = currentYear - birthYear;
var result = "You are either " + age + " or " + (age - 1);
console.log(result);
}
calculateAge(1989,new Date().getFullYear());
calculateAge(1893, new Date().getFullYear());
calculateAge(1953, new Date().getFullYear());

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, amount){
var maxAge = 200;
var total = (Math.round(amount * 365)) * (maxAge - age);
var result = "You will need " +total+ " to last you until the ripe old age of " + maxAge;
console.log(result);
}

calculateSupply(20, 4);
calculateSupply(30, 2);
calculateSupply(16, 9);


// EXERCISE: The Geometrzer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcCircumfrence(rad){
    c_calcCircumfrence= Math.PI * rad * 2;
    return "The circumference is " + c_calcCircumfrence + ".";
    }
    
function calArea(rad){
    cal_area= Math.PI * Math.pow(rad, 2);
    return "The area is " + cal_area + ".";
    }
    
    calcCircumfrence(4);
    calArea(8);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(){
    var celsius = 20;
    var fahrenheit =  celsius * 9 / 5 + 32;
    var fresult = celsius +"˚C is " + fahrenheit + " ˚F";
    console.log(fresult);   
}
celsiusToFahrenheit();

function fahrenheitToCelsius(){
    var fahrenheit = 70;
    var celsius = fahrenheit - 32 * 5 / 9;
    var cresult = fahrenheit + "˚F is " + celsius + "˚C";
    console.log(cresult);
}
fahrenheitToCelsius();
