// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var kidsnum = 2;
var partner = "wife";
var mylocation = "Toronto";
var job = "developer";

var fortune = "You will be a " + job + "in " + mylocation + ", and marrid to " + partner + " with " + kidsnum + " kids.";
console.log(fortune);
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var  cy = 2013;
var by = 1978;
var age = cy - by;

var yourFutureAge = "You are either " + age + " or " + (age - 1);

console.log(yourFutureAge);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var age = 30;
var maxAge = 200;
var amount = 5;
var total = (amount * 365) * (maxAge - age);
var result = "You will need " + total  + " to last you untill the ripe old age of "  + maxAge;
console.log(result);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var radius = 8;
var diameter= radius * 2;
var cir = diameter * Math.PI;
var result = "The circumference is "+ cir;
var area = Math.PI * diameter;
var resultArea = "The area is " + resultArea;


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 20;
var fahrenheit =  celsius * 9 / 5 + 32;
var fresult = celsius +"˚C is " + fahrenheit + " ˚F";
console.log(fresult);


var fahrenheit = 70;
var celsius = fahrenheit - 32 * 5 / 9;
var cresult = fahrenheit + "˚F is " + celsius + "˚C";
console.log(cresult);


