import { ProductRow } from "../ProductRow/ProductRow.jsx";
import "./ProductList.css";

export function ProductsList({ products }) {
  return (
    <div className="product-list">
      {products.map(product =>
        <ProductRow 
          product={product} 
          key={product.id}
        />
      )}
    </div>
  )
}
