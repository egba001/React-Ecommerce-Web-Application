import { NavLink } from "react-router-dom";

const CartItem = ({ item }) => {
    const {image, id, title, amount, price} = item;
    return (
        <div className="flex">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <NavLink to={`/product/${id}`}>
                    <img src={image} alt='product' className="max-w-[80px]" />
                </NavLink>
            </div>
        </div>
    );
}

export default CartItem;