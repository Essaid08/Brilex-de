import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const HelpButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Function to check the scroll position
    const toggleVisibility = () => {
        
        if (window.scrollY > 300) { // Show button after scrolling 300px from the top window
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const onScrollCustom = () => {
        // Scroll to top with smooth behavior
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            {
                isVisible && (
                    <div className="fixed bottom-5 right-5 z-50">
                        <button
                            onClick={onScrollCustom}
                            className="bg-[#DBE2EF] text-white p-4 border-2 border-l-orange-50 rounded-full 
                                            shadow-lg hover:bg-[#c7c3c3] transition-all duration-200">
                            <FaArrowCircleUp size={40} color="#112D4E" />
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default HelpButton;
