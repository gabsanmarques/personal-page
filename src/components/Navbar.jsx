import { useState } from 'react';
import { logoDark } from '../assets';
import { navLinks } from '../constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flex w-full py-6 px-10">
            <img 
                src={logoDark} 
                alt="logo" 
                className="w-[40px] h-[40px]"
            />
            <ul className="list-none sm:flex hidden xl:justify-end justify-center items-center flex-1">
                {navLinks.map((link) => (
                    <li 
                        key={link.id}
                        className={`font-josefin font-medium cursor-pointer text-[16px] mx-8
                            text-mediumBlue hover:text-darkBlue underline-nav`}
                    >
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                {
                    toggle 
                    ? <AiOutlineClose 
                        className="cursor-pointer w-[24px] h-[24px] hover:text-orange" 
                        onClick={() => setToggle((prev) => !prev)} 
                    /> 
                    : <AiOutlineMenu 
                        className="cursor-pointer w-[24px] h-[24px] hover:text-orange"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                }

                <div className={`${toggle ? 'sidebar-in' : 'sidebar-out'} px-6 py-[80px] bg-orange left-0 top-0 min-w-[250px] h-[100vh] sidebar fixed`}>
                    <ul className="flex flex-col justify-start items-center flex-1">
                        {navLinks.map((link) => (
                            <li 
                                key={link.id}
                                className={`font-josefin font-medium cursor-pointer text-[16px] my-4
                                    text-mediumBlue hover:text-lightOrange underline-nav underline-light`}
                                onClick={() => setToggle((prev) => !prev)} 
                            >
                                <a href={`#${link.id}`}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar