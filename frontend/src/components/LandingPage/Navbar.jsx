import React from 'react'
import { useState } from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function toggleMenu (){
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <>
    <nav className="bg-white border-b-2 md:px-14 p-4 max-w-screen-2xl mx-auto text-black fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex space-x-14 items-center">
                <a href="/">Logo</a>
                <ul className="md:flex space-x-12 hidden">
                    <a className="block hover:text-gray-400 cursor-pointer">Feature</a>
                    <a className="block hover:text-gray-400 cursor-pointer">About</a>
                    <a className="block hover:text-gray-400 cursor-pointer">Contact</a>
                    <a href="/notes" className="block hover:text-gray-400 cursor-pointer">Notes</a>
                </ul>
            </div>
            <div className="space-x-12 hidden md:flex items-center">
                <button className="btnPrimary">Sign Up</button>
            </div>


            {/* Phone size menu btn */}
            <div className="md:hidden">
                <button onClick={()=>toggleMenu()} className="text-white text-lg focus:outline-none focus:text-gray-300">
                {
                    isMenuOpen ? (<HiMiniXMark className="w-6 h-6 text-black"/>) : (<HiMiniBars3 className='w-6 h-6 text-black'/>)
                }
                </button>
            </div>
        </div>
    </nav>


    <div className={`md:hidden space-y-4 px-4 pt-5 pb-5 mt-14 text-lg bg-purple-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        <a className="block hover:text-gray-300 cursor-pointer">Feature</a>
        <a className="block hover:text-gray-300 cursor-pointer">About</a>
        <a className="block hover:text-gray-300 cursor-pointer">Contact</a>
        <a className="block hover:text-gray-300 cursor-pointer">Notes</a>
    </div>
    </>
  )
}

export default Navbar
