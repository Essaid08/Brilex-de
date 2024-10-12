import { Link } from "react-router-dom";
import logo from "../../assets/nv-logo.jpg"
import { useContext, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import MobileMenu from "./MobileMenu";
import { IoMenuSharp } from "react-icons/io5";
import { ProductTypeContext } from "../TypeProvider";




const productsArr = [
    { name: 'Gamme Détergeant', typePro: 'détergeant' },
    { name: 'Gamme Insecticide', typePro: 'insecticide' },
    { name: 'Gamme Désodorisant', typePro: 'désodorisant' },
]


function Nav() {
    const { productsType  } = useContext(ProductTypeContext)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProductsActive, setIsProductsActive] = useState(false)


    return (
        <header className="w-full bg-[#DBE2EF] mx-auto flex justify-center px-16 max-md:px-6 max-w-[1580px]">
            <nav className="flex justify-between items-center w-full py-3 ">
                <div className="h-16 w-16 rounded-full cursor-pointer">
                    <Link to='/'>
                        <img
                            className="rounded-full"
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="flex ">
                    <div className="border-r-2 border-slate-400 max-md:hidden">
                        <ul className="flex">
                            <li
                                className="custom-li-nav"
                                onMouseOver={() => setIsProductsActive(true)}
                                onMouseOut={() => setIsProductsActive(false)}
                            >
                                <a className="anchor-link-nav">
                                    <span><Link to='/products'>Produits</Link></span>
                                    <span className="span-right-hover"></span>
                                    <span className="span-left-hover"></span>
                                </a>
                                {isProductsActive && <DropDownMenu itemsArr={productsArr} />}
                            </li>
                            <li className="custom-li-nav">
                                <a className="anchor-link-nav">
                                    <span><Link to='/about'>A Propos</Link></span>
                                    <span className="span-right-hover"></span>
                                    <span className="span-left-hover"></span>
                                </a>
                            </li>
                            <li className="custom-li-nav">
                                <a className="anchor-link-nav">
                                    <span><Link to='/contact'>Nous Contacter</Link></span>
                                    <span className="span-right-hover"></span>
                                    <span className="span-left-hover"></span>
                                </a>
                            </li>
                            <li className="custom-li-nav">
                                <a className="anchor-link-nav">
                                    <span><Link to='/blog'>Blog</Link></span>
                                    <span className="span-right-hover"></span>
                                    <span className="span-left-hover"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center ml-3">
                        <span className="mr-1 first-letter:text-green-900 font-extrabold">
                            D<span className="text-red-700">Z </span>
                        </span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className=' ml-6 breakpoint-1:hidden md:hidden'>
                        <IoMenuSharp size={38} color='#112D4E' />
                    </button>
                </div>
                {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />}
            </nav>
        </header>
    )
}
export default Nav
