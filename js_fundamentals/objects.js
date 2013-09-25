// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var recipe = {
    title: "Spaghetti Vongole",
    serving: 4,
    ingredients: ["spaghetti","clam","parsley", "cherry tomatoes"]
    };
    
console.log(recipe.title);
console.log("Serving: " + recipe.serving);
console.log("Ingredients :");
    for(i=0; i < recipe.ingredients.length; i++){
        console.log(recipe.ingredients[i]);
    }
// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 
// 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books=[
    {title: "ReWork",
    author: "Jason Fried",
    alreadyRead: true },
    {title: "The Lean Startup",
    author: "Eric Rise",
    alreadyRead: true },
    {title: "Design Patterns in Ruby",
    author: "Russ Olsen",
    alreadyRead: false},
    {title: "Agile web development with Rails",
    author: "DHH",
    alreadyRead: false },
    {title: "Getting Real",
    author: "Jason Fried",
    alreadyRead: true }
    ];
    
// for (i =0; i< books.length; i++){
//     console.log(books[i].title + " by " + books[i].author);
// }

for(x = 0; x < books.length; x++){
    if(books[x].alreadyRead === true){
        console.log("You already read " + books[x].title + " by " + books[x].author + ".");
    }
    else if(books[x].alreadyRead === false){
        console.log("You still need to read " + books[x].title + " by " + books[x].author + ".");
    }
}


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var movies=[ 
    {title: "The Bourne Trilogy",
    duration: 192,
    stars: "Matt Damon" },
    {title: "Dances with Wolves",
    duration: 236,
    stars: ["Kevin Costner", "Mary McDonnell", "Graham Greene"] },
    {title: "The Green Mile",
    duration: 189,
    stars: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"] },
    {title: "Forrest Gump",
    duration: 142,
    stars: ["Tom Hanks","Robin Wright","Gary Sinise"]},
    {title: "The Shawshank Redemption",
    duration: 142,
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton" ]}
    ];
    
function list(){
   for (m =0; m < movies.length; m++){
       var result = movies[m].title + " lasts for " + movies[m].duration + " minutes. Stars: " + movies[m].stars;
   console.log(result);
  }
}
list();
