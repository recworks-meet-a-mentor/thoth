document.addEventListener("DOMContentLoaded", () => {
  generateQuote();
  setInterval(generateQuote, 2000);
});

var idx = 0;
function generateQuote() {
  let quotes = [
    "If you don’t like to read, you haven’t found the right book.",
    "When I have a little money, I buy books; and if I have any left, I buy food and clothes.",
    "That’s the thing about books. They let you travel without moving your feet.",
    "Rainy days should be spent at home with a cup of tea and a good book.",
  ];
  idx++;

  document.getElementById("quote").innerText = quotes[idx % quotes.length];
}
