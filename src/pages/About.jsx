import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";
import BrilexDetails from "../components/ui/BrilexDetails";
import ScrollBtn from "../components/ui/ScrollBtn";
import { useEffect, useRef, useState } from "react";
import aboutVideo from '../assets/videos/avoutvideo.mp4';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import bgBrilex from '../assets/aboutBg.png'

const About = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;

            const playVideo = async () => {
                try {
                    await videoRef.current.play();
                } catch (error) {
                    console.error("Video autoplay was prevented:", error);
                }
            };
            playVideo();
        }
    }, []);
    const toggleMute = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            videoRef.current.muted = !isMuted;
        }
    };

    return (
        <section className="w-full bg-[#DBE2EF]">
            <Nav />
            <div className='h-full relative w-full'>
                {isMuted ? (
                    <FaVolumeMute
                        onClick={()=>toggleMute()}
                        className="absolute right-1 bottom-1 cursor-pointer"
                        size={42}
                        color="#F9F7F7"
                    />
                ) : (
                    <FaVolumeUp
                        onClick={() =>toggleMute()}
                        className="absolute right-1 bottom-1 cursor-pointer"
                        size={42}
                        color="#F9F7F7"
                    />
                )}
                <video
                    ref={videoRef}
                    className="inset-0 w-full h-full object-cover max-h-[480Px]"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    src={aboutVideo}
                    poster="/src/assets/poster.jpg"
                />
            </div>
            <div className="px-16 max-md:px-8 max-w-[1580px] max-md:text-center mb-12 flex flex-col justify-center items-center">
                <div className="scroll-effect">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 mt-10 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#112D4E] to-[#3F72AF]"> Qui sommes-nous ?</span>
                        <span className="absolute bottom-0 left-0  w-full h-1 bg-gradient-to-r from-[#1a3658] to-[#679cdd]"></span>
                    </h1>
                    <p className="max-md:text-center text-[#6c757d] text-xl max-sm:text-lg mt-6">
                        Garden Clean MESTAR offrent des solutions de nettoyage, d'assainissement et d'hygiène durables pour aider à garder votre entreprise, votre habitation, vos biens et le monde, en bonne santé. Les origines de Garden Clean MESTAR remontent à 2006 à Jijel et depuis lors, nous n'avons regardé en arrière. Avec des centaines de produits couronnés de succès à notre actif, nous pouvons dire avec fierté que nous sommes l'une des entreprises de fabrication de détergents les plus de confiance en Algérie - RAISON SOCIALE : SNC GARDEN CLEAN MESTAR ET Cie - LES ASSOCIES : - MESTAR SOFIANE - MESTAR TARIK - MESTAR ABDELOUAHAB - MESTAR DJALAL - GERANTS : MESTAR SOFIANE ET TARIK - ACTIVITE : Fabrication de détergents et produits d’entretien, cosmétiques et hygiène corporelle - SIEGE SOCIALE : 49 – 52 ZONE DE DEPOT EL-HADADA 18000 JIJEL ALGERIE - ANNEE DE CREATION: 2006 - CAPITAL SOCIAL: 140 000 000.00 DA - BANQUE DE DOMICILIATION : - BDL JIJEL / BADR JIJEL / SGA JIJEL / AGB JIJEL / BNP PARIBAS JIJEL / BEJAIA - TELEPHONE / FAX : 034.47.91.60 / 0561.88.48.63 .
                    </p>
                </div>
                <div className="scroll-effect">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 mt-10 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#112D4E] to-[#3F72AF]"> Quelle est notre vision ?</span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a3658] to-[#679cdd]"></span>
                    </h1>
                    <p className="max-md:text-center text-[#6c757d] text-xl max-sm:text-lg mt-6">
                    Créer, manufacturer, distribuer des produits nettoyants sécuritaires, efficaces et à prix compétitifs pour les marchés résidentiel, industriel et commercial. » Depuis plus de 10 ans, la fabrication de détergents a offert un large éventail de produits en Algérie. Nous nous efforçons de maintenir les normes les plus élevées tout en dépassant les attentes des clients à tous les niveaux. Non seulement nous honorons les engagements, mais sommes connus pour le respect des délais difficiles tout en offrant rien d'autre que le meilleur. Nous visons à créer une relation client réactif qui nous permet de répondre et même dépasser les objectifs de chacun de nos projets. Garden Clean MESTAR est bien connu pour son innovation et sa franche collaboration avec nos clients, les sous-traitants, consultants ainsi que des fournisseurs ; nous avons été en mesure de fournir le niveau plus élevé de services. Nous sommes en constante évolution. Quelles sont nos missions et valeurs ? « La Société SNC Garden Clean MESTAR a pour mission de transmettre sa passion, sa culture et son expertise de la qualité des produits haut de gamme, à travers des solutions innovantes, créatrices de valeur, originales, raffinées et symbolisant notre excellence technique. » Une culture d'entreprise forte qui s'articule autour de 9 valeurs fondamentales, partagées par l'ensemble des collaborateurs du groupe : • La culture de la différence • La recherche de l’excellence • L’esprit pionnier. • La passion du design et de la création • La solidarité et l’esprit d’équipe • À un environnement sans fragrance et sans colorant. • À une approche afin de réduire l’empreinte écologique. • À la des ingrédients.
                    </p>
                </div>
                <div className="w-full mt-16">
                    <img src={bgBrilex} alt="backrounf" />
                </div>
            </div>
            <div className="py-20">
                <BrilexDetails />
            </div>
            <Footer />
            <ScrollBtn />
        </section>
    );
};

export default About;
