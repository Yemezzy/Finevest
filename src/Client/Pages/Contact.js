import React from 'react'
import OuterNav from '../Components/OuterNav'
import {HiOutlineMail} from "react-icons/hi"
import { GrLocation } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className="bg-black">
      <OuterNav />

      <div className="pt-24 px-5 md:px-10  text-white">
        <p className="md:px-0 uppercase text-center md:mt-10 px-5 font-bold text-2xl md:pt-5 ">
          Contact
          <span className="text-[#FFA500] ml-2">US</span>
        </p>

        <div className="w-full">
          <section className="md:px-20 mt-10">
            <div className="w-full gap-3 flex">
              <input
                type="text"
                className="h-[3rem] w-full border outline-none bg-transparent px-3 rounded-sm"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="h-[3rem] w-full border outline-none bg-transparent px-3 rounded-sm"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              className="h-[3rem] mt-5 w-full border outline-none bg-transparent px-3 rounded-sm"
              placeholder="Subject"
            />
            <textarea
              className="h-[10rem] mt-5 w-full border outline-none bg-transparent p-3 rounded-sm"
              placeholder="Your Message"
            />
            <button className="h-[3rem] font-bold text-sm uppercase mt-5 w-full outline-none bg-[#FFA500] px-3 rounded-sm">
              Send Message
            </button>
          </section>
        </div>

        <div className="pt-20 md:pt-10 md:flex justify-center gap-5 items-center ">
          <section className=" mb-3 md:mb-0 md:w-[20rem] flex flex-col items-center p-5 text-center border">
            <p className="rounded-full w-20 h-20 text-black bg-[#FFA500] flex justify-center items-center">
              <HiOutlineMail className="w-7 h-7" />
            </p>
            <p className="mt-5">Email:</p>
            <p className="text-xs text-gray-400">ADMIN@FINVESTHUB.CO</p>
          </section>

          <section className=" mb-3 md:mb-0 md:w-[20rem] flex flex-col items-center p-5 text-center border">
            <p className="rounded-full w-20 h-20 text-black bg-[#FFA500] flex justify-center items-center">
              <GrLocation className="w-7 h-7" />
            </p>
            <p className="mt-5">Location:</p>
            <p className="text-xs text-gray-400">
              FIRST FLOOR THAVIES INN HOUSE, 3-4 HOLBORN CIRCUS, LONDON, EC1N
              2HA
            </p>
          </section>

          <section className=" mb-3 md:mb-0 md:w-[20rem] flex flex-col items-center p-5 text-center border">
            <p className="rounded-full w-20 h-20 text-black bg-[#FFA500] flex justify-center items-center">
              <TbPhoneCall className="w-7 h-7" />
            </p>
            <p className="mt-5">Call:</p>
            <p className="text-xs text-gray-400">+1 3159928453</p>
          </section>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact