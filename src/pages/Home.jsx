import Acceuil from "../components/Acceuil"
import Footer from "../components/Footer"
import Nav from "../components/nav/Nav"
import HomeProducts from "../components/products/HomeProducts"
import Location from "../components/ui/Location"
import ScrollBtn from "../components/ui/ScrollBtn"
import BrilexDetails from "../components/ui/BrilexDetails"


const Home = () => {
    return (
        <div className=" mx-auto bg-[#DBE2EF]" >
            <Nav />
            <Acceuil />
            <HomeProducts />
            <Location />
            <ScrollBtn />
            <div className="py-14 flex justify-center">
                <BrilexDetails />
            </div>
            <Footer />
        </div>
    )
}

export default Home