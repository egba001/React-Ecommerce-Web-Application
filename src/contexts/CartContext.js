import { Children, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = 

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;