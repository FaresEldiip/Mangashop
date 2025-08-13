 const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

 cartCount.textContent = cart.length;

 addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        let card = this.closest(".card");
        let name = card.querySelector(".card-title").textContent;
        let price = card.querySelector("h6").textContent;
        let img = card.querySelector("img").getAttribute("src");

         cart.push({ name, price, img });

         localStorage.setItem("cart", JSON.stringify(cart));

         cartCount.textContent = cart.length;
    });
});
