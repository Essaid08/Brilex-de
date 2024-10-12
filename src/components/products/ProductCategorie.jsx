
import { Button } from '../ui/Button'

const ProductCategorie = ({productsType}) => {
    return (
        <div className="mx-auto  px-4 py-16  sm:py-24 w-full ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {productsType.map((product , id) => (
                    <div key={id} className="mx-auto ">
                        <div className=" w-full relative overflow-hidden rounded-lg group">
                            <img
                                alt={product.alt}
                                src={product.photo}
                                className=" object-cover object-center group-hover:opacity-85"
                            />
                            <div className="absolute z-10 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button variant="secondary" className="bg-[#ece8e8] text-black hover:bg-[#e2dfdf]">
                                    Voir tous les gouts ?
                                </Button>
                            </div>
                        </div>

                        <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-xl font-medium text-gray-900">{product.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCategorie