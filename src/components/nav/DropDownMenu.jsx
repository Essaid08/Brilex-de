import { useContext } from "react";
import { ProductTypeContext } from "../TypeProvider";
import { Link } from "react-router-dom";

const DropDownMenu = ({ itemsArr, onCloseProduct }) => {
    const { setProductsType } = useContext(ProductTypeContext); // Fixed typo
    return (
        <div className="absolute z-50 top-11 bg-[#F9F7F7] w-48 mt-2 rounded-md shadow-lg p-2">
            <ul className="flex flex-col" role="menu">
                {itemsArr.map((item, i) => (
                    <li
                        key={i}
                        className="px-2 py-3 border-b-2 border-[#3f71af63] last:border-b-0 hover:bg-slate-50 transition-colors duration-200"
                        role="menuitem"
                    >
                        <Link
                            onClick={() => {
                                setProductsType(item.typePro);
                                onCloseProduct();
                            }}
                            to="/products"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenu;
