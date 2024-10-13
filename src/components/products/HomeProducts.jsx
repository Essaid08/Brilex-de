import { Button } from "../ui/Button"
import { Card, CardContent } from "../ui/Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/Carousel"
import Autoplay from "embla-carousel-autoplay"
import desodorisantProuduits from "../../data/products/desodorisant"
import detergeantProuduits from "../../data/products/detergeant"
import insetcideProuduits from "../../data/products/insecticide"
import { useContext } from "react"
import { ProductTypeContext } from "../TypeProvider"
import { Link } from "react-router-dom"
import Gammedésodorisant from "../../assets/products/Gamme-desodorisant.png"
import Gammedétérgents from "../../assets/products/Gamme-detergents.png"
import Gammeinsecticide from "../../assets/products/Gamme-insecticide.png"


const allProducts = [...insetcideProuduits, ...desodorisantProuduits, ...detergeantProuduits]

const HomeProducts = () => {

    const { setProdyctsType } = useContext(ProductTypeContext)

    return (
        <section className="my-background  flex flex-col items-center px-16 ">
            <div className="background-overlay"></div>
            <div className="flex flex-col max-w-[1580px] mb-20 scroll-effect-scale overflow-hidden z-20">
                <div className=" mx-auto z-30 text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 mt-10 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBE2EF] to-[#F9F7F7]">Nos produits</span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DBE2EF] to-[#F9F7F7]"></span>
                    </h1>
                    <p className="text-[18px] text-[#F9F7F7] ">
                        Notre dévouement à la qualité guide chaque étape de la conception de nos produits.
                    </p>
                </div>
                <div className="mt-10 z-10 grid items-center gap-6 gap-y-16 grid-cols-1 md:grid-cols-3  w-full  ">
                    <Card className="relative group overflow-hidden rounded-2xl hover:scale-105 duration-200">
                        <CardContent className="p-0 h-full">
                            <img
                                src={Gammeinsecticide}
                                alt="Product"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                            />

                            {/* Card Title */}
                            <div className="absolute top-1 left-10 bg-[#F9F7F7] bg-opacity-70 p-2 rounded-md">
                                <h3 className="text-[#112D4E] text-lg font-bold">Gamme insecticid</h3>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button
                                    onClick={() => {setProdyctsType('insecticide')}}
                                    variant="secondary"
                                    className="bg-white text-black hover:bg-gray-200">
                                    <Link to='/products'>
                                        Voir Plus ?
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative group overflow-hidden rounded-2xl hover:scale-105 duration-200">
                        <CardContent className="p-0 h-full">
                            <img
                                src={Gammedésodorisant}
                                alt="Product"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                            />

                            {/* Card Title */}
                            <div className="absolute top-1 left-10 bg-[#F9F7F7] bg-opacity-30 p-2 rounded-md">
                                <h3 className="text-[#112D4E] text-lg font-bold">Gamme désodorisant</h3>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button
                                    onClick={() => setProdyctsType('désodorisant')}
                                    variant="secondary"
                                    className="bg-white text-black hover:bg-gray-200">
                                    <Link to='/products'>
                                        Voir Plus ?
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative group overflow-hidden rounded-2xl hover:scale-105 duration-200">
                        <CardContent className="p-0 h-full">
                            <img
                                src={Gammedétérgents}
                                alt="Product"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                            />

                            {/* Card Title */}
                            <div className="absolute top-1 left-10 bg-[#F9F7F7] bg-opacity-40 p-2 rounded-md">
                                <h3 className="text-[#112D4E] text-lg font-bold">Gamme détérgents.</h3>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link to='/products'>
                                    <Button
                                        onClick={() => setProdyctsType('détergeant')}
                                        variant="secondary"
                                        className="bg-white text-black hover:bg-gray-200">
                                        Voir Plus ?
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 1500,
                    }),
                ]}
                className="z-30 mb-10" >
                <CarouselContent
                    className=''>
                    {
                        allProducts.map((product, id) => (
                            <CarouselItem
                                className=" lg:basis-1/3 md:basis-1/2 xl:basis-1/4  flex justify-center"
                                key={id}>
                                <img
                                    className="rounded-xl w-96 md:w-80 lg:w-64 "
                                    src={product.photo}
                                    alt={product.alt} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default HomeProducts