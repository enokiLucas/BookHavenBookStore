const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const viewCartButton = document.querySelector("#view-cart-button");
const cartModal = document.querySelector(".cart-modal");
const closeTheCart = document.querySelector("#close-cart");
const clearTheCartButton = document.querySelector("#clear-cart-button");
const processOrderButton = document.querySelector("#process-order-button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("add item");
    const itemName = button.getAttribute("data-item");
    addToCart(itemName);
  });
});

viewCartButton.addEventListener("click", () => {
  console.log("view cart");
  openCartModel();
  displayCartItems();
});

closeTheCart.addEventListener("click", () => {
  console.log("close cart");
  closeCartModel();
});

clearTheCartButton.addEventListener("click", () => {
  console.log("clear the cart");
  clearTheCart();
  showMessage("Your Cart is clear");
});

processOrderButton.addEventListener("click", () => {
  processOrder();
});

function addToCart(itemName) {
  cartItems.push(itemName);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  showMessage("Item added to the cart: " + itemName);
}

function openCartModel() {
  cartModal.style.display = "block";
}

function displayCartItems() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  if (cartItems && cartItems.length > 0) {
    for (var i = 0; i < cartItems.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = cartItems[i];
      cartList.appendChild(listItem);
    }
  }
}

function closeCartModel() {
  cartModal.style.display = "none";
}

function clearTheCart() {
  if (cartItems && cartItems.length > 0) {
    cartItems.length = 0;
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
  } else {
    showMessage("The Cart is empty");
  }
}

function processOrder() {
  if (cartItems && cartItems.length > 0) {
    clearTheCart();
    closeCartModel();
    showMessage("Your Order is being processed");
  } else {
    showMessage("The Cart is empty");
  }
}

function showMessage(msg) {
  alert(msg);
}
