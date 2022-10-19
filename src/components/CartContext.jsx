import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export function useCart() {
    return useContext(CartContext)
}

export function CartContextProvider({ children }) {
    const [items, setCart] = useState([])
    const defaulValue = {items, setCart}
    return (
        <CartContext.Provider value={defaulValue}>
            {children}
        </CartContext.Provider>
    )
}

