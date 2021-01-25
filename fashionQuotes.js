let generateQuotes = document.getElementById("quotes")
 let  button = document.getElementById("button")
      author = document.getElementById("author");
      quote = document.getElementById("quotes");

const quotes = [
    "Dress like you are going to meet your worst enemy today -Coco Chanel",
    "Fashion has to reflect who you are, what you feel at the moment and where you're going -Pharell Williams-",
    "The Joy of Dressing is an art -John Galliano-",
    "Bad vibes don't go with my outfit",
    "Make it simple, but significant",
    "Life isn't perfect, but your outfit can be",
    "Style is not a disply of wealth but an expression of imagination",
    "If you can't stop thinking about it, Buy it",
    "The best colour in the whole world is the one that looks good on you",
    "Life is short, make every outfit count",
    "Life is a party, dress like it",
    "People will stare, make it worth their while",
    "Fashion is a trend. Style lives within a person -Oscar De La Renta",
    "I'm nicer when I like my outfit",
    "Forget the rules, if you like it, wear it",
    "Shopping is my Cardio -Carrie Bradshaw",
    "Dressing well is a form of good manners. -Tom Ford"
]

function newQuote (event) {
var randomNumber = Math.floor(Math.random() * (quotes.length));
generateQuotes.innerHTML = quotes[randomNumber];
// quote.innerHTML = quotes[randomNumber].quote;
// author.innerHTML = quotes[randomNumber].author;
event.preventDefault();
}
button.addEventListener("click",newQuote);