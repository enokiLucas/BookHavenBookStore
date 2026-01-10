const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("add item");
    const itemName = button.getAttribute("data-item");
    addToCart(itemName);
  });
});

function addToCart(itemName) {
  cartItems.push(itemName);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  showMessage("Item added to the cart: " + itemName);
}
