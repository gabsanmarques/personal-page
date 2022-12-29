import { socialMedia } from "../constants"
import { logoDark } from "../assets"
import React from "react"

const SocialBar = () => (
    <div className="flex flex-col justify-between items-center flex-auto">
        <img 
            src={logoDark} 
            alt="logo" 
            className="w-[40px] h-[40px] sm:flex hidden my-4"
        />

        <div className="flex w-[1.5px] h-[150px] bg-darkBlue" />

        {socialMedia.map((media) => (
            <div key={media.id} className={`object-contain ${media.id === "social-media-gmail" ? "text-[28px]" : "text-[32px]"} my-3 hover:text-orange`}>
                <a href={media.link}>
                    {React.createElement(media.icon)}
                </a>
            </div>
        ))}

        <div className="flex w-[1.5px] bg-darkBlue flex-auto" />
    </div>
)

export default SocialBar