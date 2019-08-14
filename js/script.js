/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote: "It can't rain all the time!",
    source: "Eric Draven",
    citation: "The Crow",
    year: "1994"
  },
  {
    quote:"I don't have friends. I got family",
    source:"Dominic Toretto",
    citation:"Furious 7",
    year:"2015"
  },
  {
    quote:"Ye best start believin' in ghost stories, Miss Turner. Yer in one.",
    source:"Captain Barbossa",
    citation:"Pirates of the Caribbean: The Curse of the Black Pearl",
    year:"2003"
  },
  {
    quote:"For a guy with a four digit IQ, I must have missed something.",
    source:"Eddie Morra",
    citation:"Limitless",
    year:"2011"
  },
  {
    quote:"I have to return some videotapes.",
    source:"Patrick Bateman",
    citation:"American Psycho",
    year:"2000"
  }
];
console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
