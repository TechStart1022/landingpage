import { useState } from "react";
// import { Link } from "react-router-dom";

import comanylogo from '../assets/images/logo.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="p-6 container mx-auto">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img src={comanylogo} alt="companylogo" />
                </div>
                <div className="hidden space-x-4 md:flex">
                    <a to='#' className="hover:text-green-500 cursor-pointer">
                        Pricing
                    </a>
                    <a to='#' className="hover:text-green-500 cursor-pointer">
                        Product
                    </a>
                    <a to='#' className="hover:text-green-500 cursor-pointer">
                        About Us
                    </a>
                    <a to='#' className="hover:text-green-500 cursor-pointer">
                        Careers
                    </a>
                    <a to='#' className="hover:text-green-500 cursor-pointer">
                        Community
                    </a>
                </div>
                <a className="hidden bg-blue-500 px-3 py-2 hover:bg-green-400 rounded-xl cursor-pointer md:block">
                    Get Started sdfsdf
                </a>
                <button
                    className={
                        toggle
                            ? 'open block md:hidden focus:outline-none'
                            : 'block md:hidden focus:outline-none'
                    }
                    onClick={
                        () => { setToggle(!toggle) }}>
                    Menu
                </button>
            </div>
            <div className='md:hidden'>
                <div
                    className={
                        toggle
                            ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
                            : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
                    }
                >
                    <a to='#' className="focus:cursor-pointer">Pricing</a>
                    <a to='#' className="focus:cursor-pointer">Product</a>
                    <a to='#' className="focus:cursor-pointer">About Us</a>
                    <a to='#' className="focus:cursor-pointer">Careers</a>
                    <a to='#' className="focus:cursor-pointer">Community</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar