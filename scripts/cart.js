const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const viewCartButton = document.querySelector("#view-cart-button");
const cartModal = document.querySelector(".cart-modal");
const closeTheCart = document.querySelector("#close-cart");

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

function showMessage(msg) {
  alert(msg);
}
