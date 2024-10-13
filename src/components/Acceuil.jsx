import { useRef, useEffect } from 'react';
import mainVideo from "../assets/videos/Spot-publicitare.mp4";
import { MdOutlineHighQuality, MdOutlinePriceChange, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const Acceuil = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleAutoplay = async () => {
            if (videoRef.current) {
                try {
                    await videoRef.current.play();
                } catch (error) {
                    console.error("Video autoplay was prevented:", error);
                }
            }
        };
        handleAutoplay();
    }, []);

    return (
        <section className="relative w-full flex flex-col mb-12 ">
            <div className='h-full relative  w-full'>
                <video
                    ref={videoRef}
                    className="inset-0 w-full h-full object-cover  max-h-[470px]"
                    autoPlay
                    loop
                    muted
                    src={mainVideo}
                    playsInline
                    poster="/src/assets/poster.png"
                />
                {/*
                    <img
                        className='w-full opacity-75'
                        src="/src/assets/poster.jpg"
                        alt="brilex-ads"
                    />
                */}

            </div>
            <div className="absolute inset-0  flex items-center justify-center ">
            </div>
            <div className='flex flex-col items-center  justify-center bg-[#DBE2EF] px-16  scroll-effect'>
                <div className=" mx-auto text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 mt-10 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#112D4E] to-[#3F72AF]">Notre Devise</span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a3658] to-[#679cdd]"></span>
                    </h1>
                    <p className="text-[18px] text-[#112D4E] ">
                        Notre engagement envers l'excellence nous pousse à respecter nos valeurs fondamentales dans tout ce que nous faisons.
                    </p>
                </div>
                <div className='grid gap-11 grid-cols-1 md:grid-cols-2 w-full'>
                    <div className='flex flex-col items-center'>
                        <MdOutlineHighQuality size={42} color="#112D4E" />
                        <h2 className="text-xl md:text-2xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                            Qualité
                        </h2>
                        <p className='text-center text-[14px] text-[#112D4E] max-w-[45ch]'>
                            Nous privilégions la qualité dans tous nos produits, en veillant à ce qu'ils respectent les normes
                            les plus élevées et dépassent les attentes de nos clients.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <MdOutlineProductionQuantityLimits size={42} color="#112D4E" />
                        <h2 className="text-xl md:text-2xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                            Quantité
                        </h2>
                        <p className='text-center text-[14px] text-[#112D4E] max-w-[45ch]'>
                            Nous assurons un approvisionnement constant de nos produits, garantissant que nous pouvons répondre à la demande sans compromettre la qualité.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <TbTruckDelivery size={42} color="#112D4E" />
                        <h2 className="text-xl md:text-2xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                            Distribution
                        </h2>
                        <p className='text-center text-[14px] text-[#112D4E] max-w-[45ch]'>
                            Notre réseau de distribution efficace garantit que nos produits sont disponibles pour nos clients où et quand ils en ont besoin.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <MdOutlinePriceChange size={42} color="#112D4E" />
                        <h2 className="text-xl md:text-2xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                            Prix
                        </h2>
                        <p className='text-center text-[14px] text-[#112D4E] max-w-[45ch]'>
                            Nous offrons des prix compétitifs sans sacrifier la qualité, afin de proposer la meilleure valeur à nos clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Acceuil;
