import { aboutBanner } from "../assets"

const About = () => (
    <section id="about" className=" flex flex-col py-10">
        <div className="bg-orange w-[100vw] py-2 px-5 ">
            <h3 className="font-russo text-[36px] text-lightOrange leading-8">about me</h3>
        </div>

        <div className="flex sm:flex-row flex-col-reverse justify-start items-center">
            <div className="object-contain max-w-[500px]">
                <img src={aboutBanner} alt="" />
            </div>
            <div className="flex flex-col justify-center text-josefin font-regular text-mediumBlue text-[22px] max-w-[500px] sm:mt-0 mt-10">
                <p className="mb-8">
                    Hi there! My name is Gabriel and I am a passionate frontend student who loves creating. I am currently studying computer science and am seeking opportunities to showcase my skills.
                </p>
                <p>
                    Recently, I have been focusing on improving my knowledge of <span className="bold-orange">HTML</span>, <span className="bold-orange">CSS</span>, and <span className="bold-orange">JavaScript</span> and learning new libraries and frameworks such as <span className="bold-orange">React</span> and <span className="bold-orange">Tailwind CSS</span>. I have also been working on developing <span className="bold-orange">responsive</span> and <span className="bold-orange">mobile-friendly</span> websites.
                </p>
            </div>
        </div>
        

    </section>
)
export default About