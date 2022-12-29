import { AiOutlineArrowRight } from "react-icons/ai";

const ContactForm = () => {

    const FORM_ENDPOINT = "https://public.herotofu.com/v1/5729b400-87b3-11ed-b38f-a1ed22f366b1";

    const handleSubmit = (e) => {
        e.target.reset();
    };

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            className="flex justify-center"
        >
            <div className="font-josefin flex flex-col items-center w-full">
                <h4
                    className="text-lightOrange font-russo text-[28px] max-w-[300px] leading-8 mb-2 text-center"
                >
                    Let's build something great!
                </h4>

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name"
                    className="bg-lightOrange text-darkGray placeholder-mediumBlue placeholder-opacity-50 focus:ring-0 focus:outline-none rounded-2xl py-2 px-5 w-[100%] my-2 shadow-inner"
                    required
                />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your best e-mail"
                    className="bg-lightOrange text-darkGray placeholder-mediumBlue placeholder-opacity-50 focus:ring-0 focus:outline-none rounded-2xl py-2 px-5 w-[100%] my-2 shadow-inner"
                    required
                />

                <textarea 
                    name="message" 
                    placeholder="Message"
                    className="bg-lightOrange text-darkGray placeholder-mediumBlue placeholder-opacity-50 focus:ring-0 focus:outline-none rounded-2xl py-2 px-5 w-[100%] my-2 shadow-inner resize-none"
                    rows="7"
                    required
                    
                />


                <button 
                    type="submit" 
                    className="py-3 px-8 items-center rounded-2xl bg-darkBlue text-lightOrange cursor-pointer hover:bg-mediumBlue mt-2 flex flex-row justify-center"
                >
                    <span className="mr-2 mt-1">SUBMIT</span>
                    <AiOutlineArrowRight className="text-[18px]"/>
                </button>
            </div>
        </form>
    )
}

export default ContactForm