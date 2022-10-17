import './App.css'
import productsData from "./data/products.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import { useState } from "react";

function App() {
  const { products } = productsData;
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (
    <div>
      <NavBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ProductsList products={filteredProducts}/>
    </div>
  )
}

export default App
