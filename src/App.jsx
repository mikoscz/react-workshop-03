import './App.css'
import productsData from "./data/products.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import { useState } from "react";
import { CartContextProvider } from "./components/CartContext.jsx"
import {CartDetails} from "./components/CartDetails/CartDetails.jsx"

function App() {
  const [page, setPage] = useState('list');

  const { products } = productsData;
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  })
    return (
      <div >
        <CartContextProvider >
          <NavBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setPage={setPage}
          />
          {page === 'list' && <ProductsList products={filteredProducts} />}
          {page === 'cart' && <CartDetails />}

        </CartContextProvider>
      </div>
    )
}

export default App
