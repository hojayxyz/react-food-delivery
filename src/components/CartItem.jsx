function CartItem() {
  return (
    <li className="cart-item">
      <p>NAME - QTY x PRICE</p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>QTY</span>
        <button>+</button>
      </p>
    </li>
  );
}

export default CartItem;
