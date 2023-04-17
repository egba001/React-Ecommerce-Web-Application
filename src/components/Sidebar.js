import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
// import CartItem from './CartItem';
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi"
import React from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from './CartItem';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <h2 className="text-sm font-semibold uppercase">Shopping Bag(0)</h2>
                <div onClick={handleClose} className="flex items-center cursor-pointer justify-center w-8 h-8">
                    <FiArrowRight className='text-2xl'/>
                </div>
            </div>
            <div  className="h-full">{cart.map(item => {
                return <CartItem item={item} />
            })}
            <div className="flex justify-between mt-2 p-3 rounded-md bg-slate-200 items-center">
                <div>
                    <p><span>Total : $</span> 1000</p>
                </div>
                <button onClick={clearCart} className='bg-red-300 rounded-md p-3'>
                    <FiTrash2 />
                </button>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;