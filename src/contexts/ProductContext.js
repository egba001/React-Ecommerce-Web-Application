import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContext = ({ children }) => {
    // Product state
    const [products, setProducts] = useState([])
    //  Fetch products from fake store API
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch();
            const data = response.json()
        }
    })
}

export default ProductContext;