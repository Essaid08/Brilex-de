import Acceuil from "../components/Acceuil"
import Footer from "../components/Footer"
import Nav from "../components/nav/Nav"
import HomeProducts from "../components/products/HomeProducts"
import Location from "../components/ui/Location"
import ScrollBtn from "../components/ui/ScrollBtn"
import BrilexDetails from "../components/ui/BrilexDetails"
import HomePoster from "../components/ui/HomePoster"



const Home = () => {
    return (
        <div className=" mx-auto bg-[#DBE2EF] flex flex-col items-center" >
            <Nav />
            <Acceuil />
            <HomeProducts />
            <Location />
            <ScrollBtn />
            <div className="py-14 flex justify-center">
                <BrilexDetails />
            </div>
            <HomePoster/>
            <Footer />
        </div>
    )
}

export default Home