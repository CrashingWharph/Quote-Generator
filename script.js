// variables 
const nextQuote = document.querySelector('.text');
const quote_btn = document.getElementById('next-button');
// const image = document.getElementsByTagName('img')
const interval = 3000;

// quotes 
const quotes = [ 
    { 
      quote: " Being different isn't a bad thing. I mean that you are brave enough to be yourself.", 
      author: " Luna lovegood ",
    }, 
    { 
      quote: " No one can make you feel inferior without your consent. ",
      author: " Eleanor Roosevelt ",
    },
    { 
      quote: " If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals. ",
      author: " Severous Snape ",
    },
    { 
      quote: " In the first law, an object will not change its motion unless a force acts on it ",
      author: " Isac Newton ",
    },
];

// new quote
window.onload = function() {
  function getQuote() {
      let sentence =  Math.floor(Math.random() * quotes.length); 
      document.getElementById("name").innerHTML = quotes[sentence].author;
      document.getElementsByTagName("img").innerHTML = quotes[sentence].img;
      nextQuote.innerHTML = quotes[sentence].quote;
  };

  quote_btn.addEventListener("click", getQuote); 
};
