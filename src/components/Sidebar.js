import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
// import CartItem from './CartItem';
// import { FiTrash2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi"
import React from "react";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <h2 className="text-sm font-semibold uppercase">Shopping Bag(0)</h2>
                <div onClick={handleClose} className="flex items-center cursor-pointer justify-center w-8 h-8 flex">
                    <FiArrowRight className='text-2xl' />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;