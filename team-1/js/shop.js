document.addEventListener("DOMContentLoaded", () => {
  let basket = document.getElementById("basket");

  basket.addEventListener("click", deleteFromBasket);

  let addToBasketBtns = document.getElementsByClassName("book-basket-add");
  [...addToBasketBtns].forEach((button) =>
    button.addEventListener("click", (evt) => addToBasket(basket, evt))
  );
});

// Remove from basket
function deleteFromBasket(evt) {
  if (evt.target.nodeName === "BUTTON") {
    evt.target.parentNode.remove();
  }
}

// Add to basket
function addToBasket(basket, evt) {
  basket.appendChild(createBasketItem(evt.target.dataset.title));
}

// Create an element to add to basket
function createBasketItem(title) {
  let item = document.createElement("div");
  item.className = "basket-item";

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "✗";
  item.appendChild(deleteButton);

  let text = document.createElement("span");
  text.textContent = title;
  item.appendChild(text);
  return item;
}
