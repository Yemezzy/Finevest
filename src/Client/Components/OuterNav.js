import React from 'react'
import { useState } from 'react';


const OuterNav = () => {
  const [navbar, setNavbar] = useState("red");

  return (
    <div>
      <nav className="">
        <div className="flex w-full red bg-black items-center p-7 px-5 md:px-10 justify-between">
          <img
            src="https://finvesthub.co/wp-content/uploads/2023/03/finvest-logo-1.png"
            alt=""
            className="w-[30%] md:w-[15%]"
          />

          <ul className="text-white uppercase font-bold text-sm hidden md:flex w-[35rem] justify-between">
            <li className=" p-2 bbn">Home </li>
            <li className=" p-2 bbn">Investment</li>
            <li className=" p-2 bbn">plans </li>
            <li className=" p-2 bbn">About</li>
            <li className=" p-2 bbn">Contact</li>
            <li className=" p-2 bbn">Blog</li>
          </ul>
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