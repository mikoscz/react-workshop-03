import { CartIcon } from "../CartIcon.jsx";
import { Search } from "../Search/Search.jsx";

import "./NavBar.css";
import useCart from "../../hooks/useCart.jsx";

export function NavBar({ searchValue, setSearchValue, setPage }) {
let cart = useCart();
  return (
    <header className="header">
      <h1 onClick={()=> setPage('list')}>Awesome Shop</h1>  
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CartIcon  onClick={()=> setPage('cart') }/>
      {cart.products.length}
    </header>
  )
}

