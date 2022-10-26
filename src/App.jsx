import './App.css'
import productsData from "./data/products.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import { useState } from "react";
import { CartContextProvider } from "./components/CartContext.jsx"
import { CartDetails } from "./components/CartDetails/CartDetails.jsx"
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query'


function App() {
  const [page, setPage] = useState('list');

  const [searchValue, setSearchValue] = useState("");

  const query = useQuery(["products"], async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
  })

  const cartQuery = useQuery(["carts", 1], async () => {
    const response = await fetch('http://localhost:3000/carts/1');
    const cart = await response.json();
    return cart;
  })
  if (query.isLoading) {
    return <span>Loading...</span>
  }


  const products = query.data ?? []

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  return (

    <div >

      <NavBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPage={setPage}
      />
      {page === 'list' && <ProductsList products={filteredProducts} />}
      {page === 'cart' && <CartDetails />}

    </div>

  )
}

export default App
