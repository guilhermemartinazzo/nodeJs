class Cart {
  totalValue;
  id;
  quantity = 0;

  constructor(id, totalValue, quantity) {
    this.id = id;
    this.totalValue = totalValue;
    this.quantity = quantity;
  }
}

function addToCart(qt) {
  quantity = this.quantity + qt;
}

function removeFromCart(qt) {
  this.quantity = this.quantity - qt;
}

function createCart(id, totalValue, quantity) {
  return new Cart(id, totalValue, quantity);
}

function get() {
  return this;
}
export { get, createCart, removeFromCart, addToCart };
