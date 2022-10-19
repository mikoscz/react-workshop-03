import { CartIcon } from "../CartIcon.jsx";
import { Search } from "../Search/Search.jsx";
import { CartContext, useCart } from "../CartContext.jsx";
import "./NavBar.css";

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
      {cart.items.length}
    </header>
  )
}

