import "./ProductRow.css";
import { CartIcon } from "../CartIcon.jsx";

export function ProductRow({ product }) {
  return (
    <div className="product">
      <img 
        className="product__thumbnail"
        src={product.thumbnail} 
      />
      {product.title} - {product.price}$
      <CartIcon />
      {product.category}
    </div>
  )
}
