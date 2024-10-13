import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Nav from "../components/nav/Nav"
import BrilexDetails from "../components/ui/BrilexDetails"
import ContactPoster from "../components/ui/ContactPoster"



const Contact = () => {
    return (
        <section className="flex flex-col items-center bg-[#DBE2EF]">
            <Nav/>
            <ContactForm/>
            <div className="py-20">
                <BrilexDetails />
            </div>
            <ContactPoster/>
            <Footer/>
        </section>
    )
}

export default Contact