import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";

export default function CartPage() {
  const { cartItems, removeItemFromCart, updateItemQuantity, totalAmount } = useCart();
 
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>Cart Page</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="item-details">
                    <img src={item.images[0]} alt={item.title} className="item-image" />
                    <div className="item-info">
                      <h4 className="item-title">{item.title}</h4>
                      <p className="item-brand">{item.brand}</p>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  <button className="quantity-btn btn btn-outline-dark" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn btn btn-outline-dark" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button className="action-btn" onClick={() => removeItemFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><span className="font-weight-bold">Total Amount: $</span >{totalAmount}</p>
      </div>
    </div>
  );
}
