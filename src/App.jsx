import './App.css'
import productsData from "./data/products.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";

function App() {
  const { products } = productsData;

  return (
    <div>
      <NavBar />
      <ProductsList products={products}/>
    </div>
  )
}

export default App
