import { CartIcon } from "../CartIcon.jsx";
import { Search } from "../Search/Search.jsx";
import "./NavBar.css";
import useCart from "../../hooks/useCart.jsx";
import { Link } from "react-router-dom";

export function NavBar({ searchValue, setSearchValue, setPage }) {
  let cart = useCart();
  return (
    <header className="header">
      <Link to="/products">
        <h1>Awesome Shop</h1>
      </Link>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Link to="/cart">
        <CartIcon />
      </Link>
      {cart.products.length}
    </header>
  )
}

