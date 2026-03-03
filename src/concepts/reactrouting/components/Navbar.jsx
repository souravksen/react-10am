// 

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[75px] bg-amber-600 shadow-md">
      <div className=" max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <div className="text-2xl font-bold text-white cursor-pointer hover:text-fuchsia-800">
          Logo
        </div>

       
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-black cursor-pointer transition duration-300">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer transition duration-300">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer transition duration-300">
           <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer transition duration-300">
            <NavLink to="/contact">Contact</NavLink>
           
          </li>
        </ul>


        <div>
          <button className="bg-yellow-300 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer">
            <Link to="/login">login</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;