/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Quote array variable below
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
    citation:"Limitless"
  },
  {
    quote:"I have to return some videotapes.",
    source:"Patrick Bateman",
    year:"2000"
  }
];

// console.log(quotes);
//Above can be used to test array

/***
This function takes the elements from the quotes array and chooses one at random
randomQuote creates the random number used to select the element
***/

function getRandomQuote()
{
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  return randomQuote;
}

// console.log(getRandomQuote());
//Above can be used to test getRandomQuote function
/***
printQuote function to output the randomQuote generated above
***/

function printQuote ()
{
  var quoteChoice = getRandomQuote();

  var html = '';
  html += '<p class = "quote">'+ quoteChoice.quote + '</p>';
  html += '<p class = "source">' + quoteChoice.source;

  if(quoteChoice.citation)
  {
    html += '<span class = "citation">' + quoteChoice.citation + '</span>';
  }
  if(quoteChoice.year)
  {
    html += '<span class = "year">' + quoteChoice.year + '</span>';
  }

html += '</p>';

document.getElementById('quote-box').innerHTML= html;

  return html;
}


console.log(printQuote());
/***
  DO NOT TOUCH!! This is an event listener that calls the 'printQuote' function.
  It was provided with the Unit 1 project files.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
