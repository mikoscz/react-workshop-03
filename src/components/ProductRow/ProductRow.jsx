import "./ProductRow.css";
import { CartIcon } from "../CartIcon.jsx";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";


export function ProductRow({ product }) {
  const cart = useCart();


  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
      <img 
        className="product__thumbnail"
        src={product.thumbnail}  
      />
      </Link>
      {product.title} - {product.price}$
      <CartIcon onClick={()=>{cart.addProductToCart(product)} }/>
      {product.category}
    </div>
  )
}
