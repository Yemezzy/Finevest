import React from 'react'
import { useState } from 'react';
// import { HiOutlineUser } from "react-icons/hi";
import { LuUserPlus2, LuUserCheck2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Dropmenu from './Dropmenu';


const OuterNav = () => {
  const [navbar, setNavbar] = useState("red");

  return (
    <div className="">
      <nav className="text-white fixed bg-white w-full transition ease-in-out z-50">
        <div className="flex w-full relative red bg-black items-center py-5 px-5 md:px-10 justify-between">
          <img
            src="../image/finvest-logo-1.png"
            alt=""
            className="w-[30%] md:w-[15%]"
          />

          <ul className=" uppercase font-bold text-sm hidden md:flex w-[25rem] justify-between">
            <Link to="/">
              <li className=" p-2 bbn">Home </li>
            </Link>
            <Link to="/investment-plans">
              <li className=" p-2 bbn">Investment plans</li>
            </Link>
            <Link to="/About-us">
              <li className=" p-2 bbn">About</li>
            </Link>
            <Link to="/contact-us">
              <li className=" p-2 bbn">Contact</li>
            </Link>
          </ul>

          <div className="h-[1rem]   md:hidden flex">
            <Dropmenu className=" block" />
          </div>
          <div className="hidden md:flex font-bold text-sm  items-center justify-between">
            <Link to="/login">
              <button className="px-2 border-r flex gap-1 items-center">
                <LuUserCheck2 className=" text-white text-lg" /> Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="px-2 flex gap-1 items-center">
                <LuUserPlus2 className="font-bold text-white text-lg" /> Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div>
        {/* <img
          className='w-[30%]'
          src="https://i.seadn.io/gae/e6VK5n0q95Sa85NkKJDsfySb0lXsWm72lnlWx-1OPB-WG08LAUYS3QjfgotlTUW9qOsZRPk_YTKjB01ueNF-fqkD4-OIhXrJi0pApg?auto=format&dpr=1&w=1000"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default OuterNav