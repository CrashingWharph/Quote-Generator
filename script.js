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
    { 
      quote: " The world is the reason I'm alive ",
      author: " Alan Watts ",
    },
    { 
      quote: " Change is the law of life. And those who look only to the past or present are certain to miss the future. ",
      author: " John F. Kennedy ",
    },
    { 
      quote: " No man is above the law and no man is below it: nor do we ask any man's permission when we ask him to obey it. ",
      author: " Theodore Roosevelt ",
    },
    { 
      quote: " Never above you. Never below you. Always beside you. ",
      author: " Walter Winchell ",
    },
    { 
      quote: " The Score Takes Care of Itself ",
      author: " Bill Walsh's ",
    },
    { 
      quote: " Wherever you go, no matter what the weather, always bring your own sunshine",
      author: " Anthony J. D'Angelo ",
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
