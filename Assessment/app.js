const order = document.querySelectorAll(".button-62");
const carticon = document.querySelector(".carticon");

let cart = 0;

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function () {
    alert("Another phone to basket");
    cart++;
  });
}

carticon.addEventListener("click", function () {
  alert(`${cart} items in the cart!`);
});
