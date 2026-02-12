let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} MXN`;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText =
    "Total: $" + total + " MXN";
}
