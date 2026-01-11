const submitButton = document.querySelector("#submit-contact-us");
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const msg = document.querySelector("#msg").value;

const customerInfo = {
  name,
  email,
  msg,
};

const keyValue = name;
localStorage.setItem(keyValue, JSON.stringify(customerInfo));

submitButton.addEventListener("click", () => {
  alert("Thank you for your message");
});
