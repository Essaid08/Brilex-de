import Nav from "../components/nav/Nav";
import Footer from "../components/Footer";
import BrilexDetails from "../components/ui/BrilexDetails";
import ScrollBtn from "../components/ui/ScrollBtn";
import ProductsUi from "../components/products/ProductsUi";
import ProductPoster from "../components/products/ProductPoster";

const Products = () => {
    return (
        <section className="flex flex-col w-full items-center bg-[#DBE2EF]">
            <Nav />
            <ProductsUi />
            <div className="py-20">
                <BrilexDetails />
            </div>
            <ProductPoster/>
            <Footer />
            <ScrollBtn />
        </section>
    )
}

export default Products