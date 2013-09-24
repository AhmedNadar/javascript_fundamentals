// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(num1, num2){
 if (num1 > num2)
   {
   	console.log(num1);
   }
 	else
   {
   	console.log(num2);
   }
}
console.log(greaterNum(12,45));
console.log(greaterNum(34,25));

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(language){
    if (language === "AR")
    {
        console.log("Salam, ya Donia");
    }
    else if (language === "FR")
    {
        console.log("Bonjour, le world");
    }
    else
    {
        console.log("Hello, World");
    }
}
helloWorld("AR");
helloWorld("FR");
helloWorld("En");
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(score){
    if (score >= 90)
    {
        console.log("You got an A");
    }
    else if (score >= 80 && score <= 89)
    {
        console.log("You got a B");
    }
    else if(score >= 70 && score <= 79)
    {
        console.log("You got a C");
    }
    else if(score >= 60 && score <= 69)
    {
        console.log("You got a D");
    }
    else
    {
        console.log("You got a F");
    }    
}

assignGrade(90);
assignGrade(80);
assignGrade(70);
assignGrade(60);
assignGrade(50);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number){
    if (number < 0){
        return "Value can't be negative";
    }
    if (number === 1){
        return number + " " + noun;
    }
    else
    {
        return number + " " + noun + "s";
    }
}

console.log(pluralize("Dog", 3));
console.log(pluralize("Car", 1));
console.log(pluralize("House", 0));
console.log(pluralize("Computers", -1));




