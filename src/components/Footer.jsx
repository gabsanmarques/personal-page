import React from 'react'
import { logoLight } from '../assets';
import { SiReact, SiTailwindcss } from 'react-icons/si';

const Footer = () => (
    <footer className="w-full flex flex-col py-10 justify-center items-center bg-orange">
        <div className="object-contain w-[36px] h-[36px]">
             <img src={logoLight} alt="logo-gabriel" />
        </div>
        <h4 className="font-russo text-lightOrange text-[20px] mt-3">
            Thanks for visiting!
        </h4>
        
        <span className="font-josefin font-regular text-[16px] text-lightOrange">
            Made by Gabriel Santos using
        </span>

        <div className="flex flex-row space-x-2 mt-2 justify-center text-lightOrange text-[28px]">
            <SiReact />
            <SiTailwindcss />
        </div>
        
    </footer>
)
export default Footer