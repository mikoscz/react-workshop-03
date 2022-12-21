import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useCart from "../../hooks/useCart";
import { CartIcon } from "../CartIcon";

export const ProductDetails = () => {
  const params = useParams();
  const cart = useCart();

  const query = useQuery(["products", params.productId], async () => {
    const response = await fetch(
      `http://localhost:3000/products/${params.productId}`
    );
    const product = await response.json();
    return product;
  });

  const product = query.data;

  if (query.isLoading || !product) return <div>Loading...</div>;

  return (
    <div>
      <img className="product__thumbnail" src={product.thumbnail} />
      {product.title} - {product.price}$
      <CartIcon
        onClick={() => {
          cart.addProductToCart(product);
        }}
      />
      {product.category}
      <div>{product.description}</div>
    </div>
  );
};
