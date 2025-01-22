import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
