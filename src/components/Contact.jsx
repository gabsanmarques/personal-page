import { contactBanner } from "../assets"
import ContactForm from "./ContactForm"

const Contact = () => (
    <section id="contact" className="py-[180px] sm:ml-[50px] w-full sm:px-0 px-1">
        <div className="bg-darkBlue w-full h-[300px] flex sm:flex-row flex-col sm:justify-start justify-center rounded-l-3xl items-center">
            <div className="object-contain z-[2] sm:flex hidden w-[450px] -ml-[40px]">
                <img src={contactBanner} alt="contact-banner" />
            </div>
            
            <div className="rounded-xl py-8 px-[50px] sm:w-[530px] min-w-[400px] bg-orange sm:-ml-[60px] ml-0 ">
                <ContactForm />
            </div>
        </div>
    </section>
)

export default Contact