const newsletterButtons = document.querySelectorAll(".newsletter-button");

newsletterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thank you for subscribing to our newsletter");
  });
});
