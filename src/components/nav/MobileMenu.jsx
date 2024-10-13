import  { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom";
import DropDownMenuMobile from "./DropDownMenuMobile";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const productsArr = [
    { name: 'Gamme Détergeant', typePro: 'détergeant' },
    { name: 'Gamme Insecticide', typePro: 'insecticide' },
    { name: 'Gamme Désodorisant', typePro: 'désodorisant' },
    { name: 'Tous les Produits', typePro: 'all' },
]

const MobileMenu = ({ isOpen, onClose }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                onClose();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen && mounted) {
            setIsClosing(true);
            const timer = setTimeout(() => setIsClosing(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, mounted]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 150);
    };

    if (!mounted && !isOpen) return null;

    return (
        <aside
            className={`fixed inset-0 bg-[#F9F7F7] z-50 transition-opacity duration-300 md:hidden
                ${isOpen || isClosing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
        >
            <div
                className={`flex flex-col h-full transition-transform duration-300 transform
                    ${(mounted && isOpen) ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Close button */}
                <div className="flex justify-end px-6 py-6 w-full">
                    <button onClick={handleClose}>
                        <IoCloseSharp size={32} color="#112D4E"/>
                    </button>
                </div>

                {/* Navigation list */}
                <ul className="space-y-4 px-6  border-gray-200 flex flex-col gap-6">
                    {/* Charik menu item */}
                    <li className="li-nav-mobile">
                        <a href="#" className="block text-2xl font-light hover:text-[#3F72AF]">
                            <Link to='/'>Accueil</Link>
                        </a>
                    </li>
                    <li
                        className="cursor-pointer"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                        <div className="flex items-center justify-between w-full ">
                            <a href="#" className="block hover:text-[#3F72AF] text-2xl font-light">Nous Produits</a>
                            {isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                        {isProductsOpen && <DropDownMenuMobile itemsArr={productsArr} onCloseProduct={handleClose} />}
                    </li>
                    <li className="li-nav-mobile">
                        <a href="#" className="block text-2xl font-light hover:text-[#3F72AF]">
                            <Link to='/about'>À Propos</Link>
                        </a>
                    </li>
                    <li className="li-nav-mobile">
                        <a href="#" className="block text-2xl font-light hover:text-[#3F72AF]">
                            <Link to="/contact">Nous Contacter</Link>
                        </a>
                    </li>
                    <li className="li-nav-mobile">
                        <a href="#" className="block text-2xl font-light hover:text-[#3F72AF]">
                            <Link to="/blog">Brilex Blogs</Link>
                        </a>
                    </li>
                    <div className="h-[1px] w-[98%]  bg-[#3f71af41]"></div>
                </ul>
                <div className='flex items-center justify-center gap-8 mt-12'>
                    <a href='https://www.instagram.com/gardencleanbrilexoriginal/' target='_blank' rel="noopener noreferrer">
                        <FaInstagram size={36} color="#112D4E" />
                    </a>
                    <a href='https://www.youtube.com/channel/UCpmxY_BzKiySS-YVL_iL28A' target='_blank' rel="noopener noreferrer">
                        <FaYoutube  size={36} color="#112D4E" />
                    </a>
                    <a href='https://www.facebook.com/brilexoriginal' target='_blank' rel="noopener noreferrer">
                        <FaFacebook  size={36} color="#112D4E" />
                    </a>
                    <a href='https://www.tiktok.com/@gardencleanbrilex' target='_blank' rel="noopener noreferrer">
                        <FaTiktok  size={36} color="#112D4E" />
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default MobileMenu