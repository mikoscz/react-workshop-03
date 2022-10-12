import { CartIcon } from "../CartIcon.jsx";
import "./NavBar.css";

export function NavBar() {
  return (
    <header className="header">
      <h1>Awesome Shop</h1>  
      <input 
        type="text"
        placeholder="Search.."
      />
      <CartIcon />
    </header>
  )
}
