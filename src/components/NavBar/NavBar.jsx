import { CartIcon } from "../CartIcon.jsx";
import { Search } from "../Search/Search.jsx";
import "./NavBar.css";

export function NavBar({ searchValue, setSearchValue }) {
  return (
    <header className="header">
      <h1>Awesome Shop</h1>  
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CartIcon />
    </header>
  )
}
