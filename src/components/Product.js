import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
    console.log(product);
    const { id, image, category, title, price } = product;
    return (
        <div>
            <div className="border border-[#0004E] rounded-lg h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' alt='product' />
                    </div>
                    <div className="absolute top-0 right-0 bg-[#964B00] p-1">
                        <button>
                            <div className="flex justify-center items-center text-white w-12 h-12">
                                <BsPlus className="text-3xl" />
                            </div>
                        </button>
                        <NavLink to={'/'} className='w-12 h-12 bg-white flex justify-center items-center text-primary'>
                            <BsEyeFill />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;