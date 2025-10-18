
import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";
import logo from '../assets/logo.png';

export default function Navbar() {
    const links = [
        { id: 1, inside: 'About', path: '/About' },
        { id: 2, inside: 'Features', path: '/Features' },
        { id: 3, inside: 'Pricing', path: '/Pricing' },
        { id: 4, inside: 'Testimonials', path: '/Testimonials' },
        { id: 5, inside: 'Help', path: '/Help' },
    ];
    const btnData = [
        { id: 1, inside: "Sign In", path: "/signin" },
        { id: 2, inside: "Sign Up", path: "/signup" }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className="">
            <nav className="max-w-[1140px] px-3 mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex gap-3 items-center">
                    <img src={logo} alt="logo" />
                    <span className="text-xl font-medium">
                        Lasles<span className="font-bold">VPN</span>
                    </span>
                </div>

                {/* Center Links (desktop) */}
                <div className="hidden lg:flex items-center justify-between w-[450px] transition-all duration-500">
                    {links.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500"
                                    : "text-[#4F5665] text-base font-medium  hover:text-red-500 transition-all duration-300"}>
                            {link.inside}
                        </NavLink>
                    ))}
                </div>

                {/* Right side buttons + toggle */}
                <div className="flex items-center justify-between gap-3">

                    {/* Sign in/up buttons - hidden on small screens (<550px) */}
                    <div className="hidden sm:flex gap-5 items-center">
                        {btnData.map(data => (
                            <NavLink
             
                           to={data.path}
                                key={data.id}
                                className="w-[130px] h-[45px] flex items-center justify-center hover:border-[1px] font-medium hover:text-red-600 rounded-[30px] hover:shadow-2xl hover:shadow-[#F5383859] hover:border-red-400 transition duration-300">
                                {data.inside}
                            </NavLink>
                        ))}
                     </div>
                     
                    {/* Toggle button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <RiCloseLine className="w-10 h-10" /> : <FaBars className="w-10 h-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden bg-[#F8F8F8] w-full flex flex-col items-center 
                space-y-9 shadow-xl py-9 absolute z-50 top-[110px] left-0 right-0 transition-all duration-500 ease-in-out
                    ${isOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-5 pointer-events-none"}`}>
                    {/* Links */}
                    {links.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red-500"
                                    : "text-[#4F5665] text-base font-medium hover:text-red-500 transition-all duration-300"}>
                            {link.inside}
                        </NavLink>
                    ))}

                    {/* Sign in / Sign up buttons (only visible in mobile menu) */}
                    <div className="sm:hidden flex flex-col gap-10 w-full items-center">
                        {btnData.map(data => (
                            <NavLink
                                to={data.path}
                                key={data.id}
                                className="w-[150px] h-[50px] flex items-center justify-center hover:border-[1px] font-medium hover:text-[#F53855] rounded-[30px] hover:shadow-2xl hover:shadow-[#F5383859] hover:border-[#F53855] transition duration-300">
                                {data.inside}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}
