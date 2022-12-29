import { heroBanner } from "../assets"

const Hero = () => (
    <section id="home" className="flex sm:flex-row flex-col justify-start items-center sm:-mt-[80px]">

        <div className="flex flex-col sm:min-w-[500px]">

            <span className="font-josefin text-[24px] font-medium text-orange">Hi, I'm</span>

            <h1 className="font-russo text-[48px] text-darkGray max-w-[400px] leading-[38px] mt-1 mb-8">
                Gabriel Santos <span className="text-mediumBlue text-[36px]">and I build <span className="text-orange">solutions</span>.</span>
                
            </h1>

            <p className="font-josefin text-[24px] text-mediumBlue text-regular max-w-[500px] leading-7">
                I am a student who is currently improving my front-end development skills. My focus is on expanding my knowledge of various technologies and challenging myself to be the best that I can be.
            </p>

        </div>

        <div className="flex object-contain sm:w-[655px] w-[100%] flex-shrink-0 -z-[1]">

            <img src={heroBanner} alt="" />

        </div>

    </section>
)

export default Hero