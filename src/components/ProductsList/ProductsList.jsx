import { ProductRow } from "../ProductRow/ProductRow.jsx";
import "./ProductList.css";
import { useOutletContext } from "react-router-dom"

import {
  useQuery,
  useMutation,
} from '@tanstack/react-query'

export function ProductsList() {
  const { searchValue } = useOutletContext()

  const query = useQuery(["products"], async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
  })

  if (query.isLoading) {
    return <span>Loading...</span>
  }

  const products = query.data ?? []

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (
    <div className="product-list">
      {filteredProducts.map(product =>
        <ProductRow
          product={product}
          key={product.id}
        />
      )}
    </div>
  )
}
