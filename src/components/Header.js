// import logo from './../images/logo.png';
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    return (
        <header className=" bg-red-300 p-2">
           <h1>Header</h1>
           <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
                <BsBag className="text-2xl" />
           </div>
        </header>
    );
}

export default Header;