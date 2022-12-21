import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export const CartDetails = () => {
  const navigate = useNavigate();

  const cart = useCart();

  let sum = cart.products.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // console.log("rendred")

  return (
    <div>
      {" "}
      <div>
        {cart.products.map((item) => {
          return (
            <div key={item.id}>
              {item.title} - ${item.price} - quantity:{" "}
              {
                <input
                  onChange={(event) =>
                    cart.setQuantity(item, parseInt(event.target.value))
                  }
                  type="number"
                  value={item.quantity || 1}
                />
              }
              <button onClick={() => cart.removeProductFromCart(item)}>
                x
              </button>{" "}
            </div>
          );
        })}
      </div>
      {sum}$<button onClick={() => navigate("/shipment")}>Submit</button>
    </div>
  );
};
