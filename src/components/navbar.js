import * as React from 'react'
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout"
import { IconContext } from "@react-icons/all-files"
import ThemeToggle from './themeToggle';

const Navbar = () => {
    return (
        <nav className="bg text-main">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        <div>
                            <a href="#" className="flex items-center py-5 px-2 ">
                                {/* <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg> */}
                                <IconContext.Provider value={{ size: 24 }}>
                                    <FcAbout />
                                </IconContext.Provider>
                                <span className="font-bold">Journal</span>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 ">About Me</a>
                            <a href="#" className="py-5 px-3 ">Posts</a>
                        </div>
                    </div>


                    <div className="hidden md:flex items-center space-x-1">

                        <ThemeToggle />
                        {/* <IconContext.Provider value={{ size: 24 }}>
                            <BiMoon />
                        </IconContext.Provider> */}
                        {/* <a href="" className="py-5 px-3">Login</a>
                        <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a> */}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm ">About Me</a>
                <a href="#" className="block py-2 px-4 text-sm ">Posts</a>
            </div>
        </nav>
    )
}

export default Navbar