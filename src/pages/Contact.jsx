import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Nav from "../components/nav/Nav"



const Contact = () => {
    return (
        <section className="flex flex-col items-center bg-[#DBE2EF]">
            <Nav/>
            <ContactForm/>
            <Footer/>
        </section>
    )
}

export default Contact