import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import { Button } from "../ui/Button"
import ProductCategorie from "../products/ProductCategorie"
import desodorisantProuduits from "../../data/products/desodorisant.json"
import detergeantProuduits from "../../data/products/detergeant.json"
import insetcideProuduits from "../../data/products/insecticide.json"
import { ProductTypeContext } from "../TypeProvider"
import { useContext, useEffect } from "react"



const ProductsUi = () => {
    const { prodyctsType, setProdyctsType } = useContext(ProductTypeContext)
    const allProducts = [...desodorisantProuduits, ...insetcideProuduits, ...detergeantProuduits]
    useEffect(() => {
        console.log("Current product type:", prodyctsType);
    }, [prodyctsType]);
    return (
        <div className="bg-[#f3f1f1] px-16 max-md:px-8 max-w-[1580px] ">
            <Tabs
                defaultValue={prodyctsType || 'all'}
                className="w-full mt-6"
            >
                <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-y-8 max-lg:mb-28 ">
                    <TabsTrigger value="détergeant">
                        <Button
                            className='text-[#112D4E]'
                            onClick={() => { setProdyctsType('détergeant') }}
                            size='lg'
                            variant="outline">
                            Détergeant
                        </Button>
                    </TabsTrigger>
                    <TabsTrigger value="insecticide">
                        <Button
                            className='text-[#112D4E]'
                            onClick={() => setProdyctsType('insecticide')}
                            size="lg"
                            variant="outline">
                            Insecticide
                        </Button>
                    </TabsTrigger>
                    <TabsTrigger value="désodorisant">
                        <Button
                            className='text-[#112D4E]'
                            onClick={() => setProdyctsType('désodorisant')}
                            size="lg"
                            variant="outline">
                            Désodorisant
                        </Button>
                    </TabsTrigger>
                    <TabsTrigger value="all">
                        <Button
                            className='text-[#112D4E]'
                            onClick={() => setProdyctsType('all')}
                            size="lg"
                            variant="outline">
                            All
                        </Button>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="détergeant">
                    <ProductCategorie productsType={detergeantProuduits} />
                </TabsContent>
                <TabsContent value="insecticide">
                    <ProductCategorie productsType={insetcideProuduits} />
                </TabsContent>
                <TabsContent value="désodorisant">
                    <ProductCategorie productsType={desodorisantProuduits} />
                </TabsContent>
                <TabsContent value="all">
                    <ProductCategorie productsType={allProducts} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ProductsUi