// javascript

// random color generation from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function randBackgroundColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

// print quote function
function printQuote() {
  var quote_boxDiv = document.getElementById('quote-box');
  // calling the function getRandomQuote()
  getRandomQuote();

  var randQuote = '';
  randQuote += '<p class="category"><i>' + getquote.category + '</i></p>';
  randQuote += '<p class="quotes"><i>\"' + getquote.quote + '\"</i></p>';
  randQuote += '<p class="source"><strong>- </strong>' + getquote.source;

  // check that the object citation is not empty
  if (getquote.citation != '') {
    randQuote += '<span class="citation">, ' + getquote.citation + '</span>';
  }
  // check that the object year is not empty
  if (getquote.year != '') {
    randQuote += '<span class="year">,  ' + getquote.year + '</span>';
  }
  randQuote += '</p>';

  //print the random quote
  quote_boxDiv.innerHTML = randQuote;
  // calling the function randBackgroundColor() to change the color when the button "shows another quote" is pressed
  randBackgroundColor();
}

// get a ramdom object from the array and return the randQuote variable
function getRandomQuote(){
    //random quote
    getquote = quotes[Math.floor(Math.random() * quotes.length)];

return getquote;
}


// refresh it every 20 seconds, and change the background color
function auto_refresh() {
  setInterval(printQuote,20000);
  setInterval(randBackgroundColor,20000);
}




// array of objects with 10 quotes
var quotes = [
  {quote: "The way to get started is to quit talking and begin doing.",
  source: "Walt Disney",
  citation: "Interview",
  year:"",
  category:"Famous People"
},
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source: "Nelson Mandela",
  citation: "Speech",
  year:"2008",
  category:"Famous People"
},
  {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  source: "Benjamin Franklin",
  citation: "",
  year:"",
  category:"Famous People"
},
  {quote: "The future belongs to those who believe in the beauty of their dreams.",
  source: "Eleanor Roosevelt",
  citation: "Wrote in her syndicated newspaper",
  year:"1957",
  category:"Famous People"
},
  {quote: "In the end, it's not the years in your life that count. It's the life in your years.",
  source: "Abraham Lincoln",
  citation: "",
  year:"",
  category:"About Life"
},
  {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  source: "Thomas A. Edison",
  citation: "",
  year:"",
  category:"About Life"
},
  {quote: "Life is a succession of lessons which must be lived to be understood.",
  source: "Ralph Waldo Emerson",
  citation: "",
  year:"",
  category:"About Life"
},
  {quote: "Your time is limited, so don't waste it living someone else's life.",
  source: "Steve Jobs",
  citation: "Speech",
  year:"2005",
  category:"About Success"
},
  {quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  source: "Winston S. Churchill",
  citation: "",
  year:"",
  category:"About Success"
},
  {quote: "Success usually comes to those who are too busy to be looking for it.",
  source: "Henry David Thoreau",
  citation: "",
  year:"",
  category:"About Success"
}
];

printQuote(); // print the first quote
auto_refresh(); // refresh it every 20 seconds, and change the background color

// Event listener linked to the button that calls the function printQuote()
document.getElementById("Show_Another").addEventListener("click", printQuote);
