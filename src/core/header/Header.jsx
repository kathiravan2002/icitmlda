import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from './NavItems';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenuFold3Line } from 'react-icons/ri';


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }

            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        console.log();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const about = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        { name: "Organizing Committee", path: "/organizing-committee" },
        { name: "Editorial Board", path: "/editorial-board" },

    ];
    const author = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },

    ];
    return (
        <div className='flex justify-center'>
            <div className={` fixed   w-full    z-50   duration-300 ${scroll ? ' top-0 bg-[#440e44] py-2 rounded-b-[15px]' : ' lg:top-10 md:top-5 top-5 '} `}>
                <div className={`flex justify-between relative  items-center  px-0   w-full   2xl:px-45 ${scroll ? '  ' : '  '} `}>
                    <Link to="/">
                        <div className="relative z-50 pl-0 lg:pl-15">
                            <div className="relative ">
                                <img
                                    src="/images/headerstyle.png"
                                    alt="logo"
                                    className="lg:w-100 md:w-70 sm:w-50 w-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center  mr-4 lg:text-4xl md:text-2xl text-xl text-white namdhinggo-extrabold  tracking-wider">
                                    <img src="/images/ICITMLDA.png" alt="" className="md:w-40 w-25 " />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="hidden lg:block w-full relative right-15">
                        <ul className={`flex justify-end gap-10 poppins-medium text-[18px] rounded-r-[15px]  text-white  shadow-lg py-5 lg:px-10 px-4 ${scroll ? 'bg-[#900792] ' : 'bg-gradient-to-r from-[#A405A7] to-[#400241]  '} `}>
                            <li className="">
                                <Link to='/' className={` ${isActive == '/' ? '' : '  '}`}>Home</Link>
                            </li>
                            <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className={`flex items-center gap-1  ${about.some(link => location.pathname === link.path) ? '' : ''}`} >
                                About Us
                                <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown1 &&
                                    <div className={`absolute  border border-[#A405A7] mt-2 rounded-lg  ${scroll ? ' bg-gradient-to-b from-[#A405A7] to-[#400241]' : 'bg-gradient-to-b from-[#A405A7] to-[#400241] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {about.map((link, index) => {
                                                const isActive = location.pathname === link.path;

                                                return (
                                                    <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? '  ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
                                    </div>}
                            </li>
                            <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1  ${author.some(link => location.pathname === link.path) ? '' : '   '}`}>Author’s Desk<FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown2 &&
                                    <div className={`absolute  border border-[#A405A7] mt-2  rounded-lg    ${scroll ? ' bg-gradient-to-b from-[#A405A7] to-[#400241]' : 'bg-gradient-to-b from-[#A405A7] to-[#400241] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {author.map((link, index) => {
                                                const isActive = location.pathname === link.path;
                                                return (
                                                    <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? ' ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    </div>}
                            </li>


                            <li >
                                <Link to='/contact-us' className={` ${isActive == '/contact-us' ? ' ' : ' '}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        onClick={ToggleMenu}
                        className={ `absolute right-0 w-full flex justify-end  bg-gradient-to-r  from-[#A405A7] to-[#400241] rounded-r-[15px]  shadow-lg py-3 md:py-4 px-4 ${scroll ? "" : ""
                            } text-white inline-flex align-middle cursor-pointer items-center duration-300  select-none lg:hidden `}
                    >
                        {" "}

                        < RiMenuFold3Line  
                            className={`${scroll ? " " : ""}   text-3xl  cursor-pointer duration-300   `}
                        />

                    </div>

                </div>
                <div className="lg:hidden">
                    <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} setDropdown1={setDropdown1} dropdown1={dropdown1} />
                    {MenuOpen && (
                        <div
                            onClick={() => setMenuOpen(false)}
                            className="h-screen w-full bg-black/40 absolute top-0 "
                        ></div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default Header