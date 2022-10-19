import "./ProductRow.css";
import { CartIcon } from "../CartIcon.jsx";
import { useCart } from "../CartContext";

export function ProductRow({ product }) {
  const cart = useCart();
  return (
    <div className="product">
      <img 
        className="product__thumbnail"
        src={product.thumbnail} 
      />
      {product.title} - {product.price}$
      <CartIcon onClick={()=>{cart.setCart([...cart.items, product])} }/>
      {product.category}
    </div>
  )
}
