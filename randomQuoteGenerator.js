const grabQuoteInput = document.querySelector("#quote-input");
const grabQuoteButton = document.querySelector("#quote-button");

grabQuoteButton.addEventListener("click", generateQuoteButton);

//quote Array//
const quotesArray = [
    "Simplicity is the ultimate sophistication. — Steve Jobs",
    "Clean code always looks like it was written by someone who cares. — Michael Feathers",
    "First, solve the problem. Then, write the code. — John Johnson",
    "The most disastrous thing that you can do is learn your first programming language so well that you think it's the only one. — Alan Kay",
    "Programming is not about what you know; it's about what you can figure out. — Chris Pine",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
]

function generateQuote (array) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomSelection = array[randomNumber];
    return randomSelection; 
}

function generateQuoteButton () {
    grabQuoteInput.value = `${generateQuote(quotesArray)}`;
}