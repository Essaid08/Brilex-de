import { Link } from "react-router-dom";
import { ProductTypeContext } from "../TypeProvider";
import { useContext } from "react";

const DropDownMenuMobile = ({ itemsArr }) => {
    const { setProdyctsType} = useContext(ProductTypeContext)
    return (
        <div className=" bg-slate-100 w-full mt-2 rounded-md shadow-lg p-2">
            <ul className="flex flex-col" role="menu">
                {itemsArr.map((item, i) => (
                    <li
                        onClick={() => setProdyctsType(item.typePro)}
                        key={i}
                        className="text px-2 py-3  hover:text-[#3F72AF] transition-colors duration-200"
                        role="menuitem"
                    >
                        <Link to="/products">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenuMobile;