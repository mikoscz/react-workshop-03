import { useLocation, useNavigation } from "react-router-dom";
import useCart from "../../hooks/useCart";

export const Summary = () => {
  const cart = useCart();
  const { state } = useLocation();

  const data = {
    ...state,
    totalAmount: cart.products.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0),
  };

  return (
    <div>
      <div>{data.firstName}</div>
      <div>{data.lastName}</div>
      <div>{data.address}</div>
      <div>{data.totalAmount}</div>
      <button type="button">accept</button>
    </div>
  );
};
