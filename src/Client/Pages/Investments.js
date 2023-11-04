import React from 'react'
import OuterNav from '../Components/OuterNav'
import Footer from '../Components/Footer';

const Investments = () => {
  return (
    <div className="bg-black ">
      <OuterNav />

      <div className="pt-24 px-5 md:px-10 text-white">
        <p className="md:px-0 text-center md:mt-10 px-5 font-bold text-2xl md:pt-5 ">
          INVESTMENT
          <span className="text-[#FFA500] ml-2">PLANS</span>
        </p>

        <div className="grid grid-cols-4 gap-4 mt-10">
          <section className=" border p-2 h-[20rem]">
            <p className="text-center text-sm mt-3 text-[#FFA500]">
              Starter Plan
            </p>
            <div className="flex  font-thin items-center w-full justify-between px-10 mt-5">
              <section className="text-center">
                <p className="text-xl ">3%</p>
                <p className="text-xs">Roi</p>
              </section>
              <p className="text-sm">for</p>
              <section className="text-center">
                <p className="text-xl">30</p>
                <p className="text-xs">Day(s)</p>
              </section>
            </div>

            <div className="mt-10 px-3 text-sm">
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Minimum amount</p>
                <p>$200</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Maximum amount</p>
                <p>$999</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Returns</p>
                <p>80%</p>
              </section>
            </div>

            <div className="px-3">
              <button className="w-full text-xs uppercase py-2 bg-[#FFA500] mt-5">
                Invest Now
              </button>
            </div>
          </section>

          <section className=" border p-2 h-[20rem]">
            <p className="text-center text-sm mt-3 text-[#FFA500]">
              Bronze Plan
            </p>
            <div className="flex  font-thin items-center w-full justify-between px-10 mt-5">
              <section className="text-center">
                <p className="text-xl ">5%</p>
                <p className="text-xs">Roi</p>
              </section>
              <p className="text-sm">for</p>
              <section className="text-center">
                <p className="text-xl">30</p>
                <p className="text-xs">Day(s)</p>
              </section>
            </div>

            <div className="mt-10 px-3 text-sm">
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Minimum amount</p>
                <p>$500</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Maximum amount</p>
                <p>$4,999</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Returns</p>
                <p>150%</p>
              </section>
            </div>

            <div className="px-3">
              <button className="w-full text-xs uppercase py-2 bg-[#FFA500] mt-5">
                Invest Now
              </button>
            </div>
          </section>

          <section className=" border p-2 h-[20rem]">
            <p className="text-center text-sm mt-3 text-[#FFA500]">
              Silver Plan
            </p>
            <div className="flex  font-thin items-center w-full justify-between px-10 mt-5">
              <section className="text-center">
                <p className="text-xl ">6%</p>
                <p className="text-xs">Roi</p>
              </section>
              <p className="text-sm">for</p>
              <section className="text-center">
                <p className="text-xl">30</p>
                <p className="text-xs">Day(s)</p>
              </section>
            </div>

            <div className="mt-10 px-3 text-sm">
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Minimum amount</p>
                <p>$5,000</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Maximum amount</p>
                <p>$19,999</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Returns</p>
                <p>180%</p>
              </section>
            </div>

            <div className="px-3">
              <button className="w-full text-xs uppercase py-2 bg-[#FFA500] mt-5">
                Invest Now
              </button>
            </div>
          </section>

          <section className=" border p-2 h-[20rem]">
            <p className="text-center text-sm mt-3 text-[#FFA500]">Gold Plan</p>
            <div className="flex  font-thin items-center w-full justify-between px-10 mt-5">
              <section className="text-center">
                <p className="text-xl ">7%</p>
                <p className="text-xs">Roi</p>
              </section>
              <p className="text-sm">for</p>
              <section className="text-center">
                <p className="text-xl">30</p>
                <p className="text-xs">Day(s)</p>
              </section>
            </div>

            <div className="mt-10 px-3 text-sm">
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Minimum amount</p>
                <p>$20,000</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Maximum amount</p>
                <p>$100,000</p>
              </section>
              <section className="w-full mt-3 pb-1 border-b  border-dashed justify-between flex items-center">
                <p>Returns</p>
                <p>210%</p>
              </section>
            </div>

            <div className="px-3">
              <button className="w-full text-xs uppercase py-2 bg-[#FFA500] mt-5">
                Invest Now
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className="px-10 mt-10 text-white">
        <p className="md:px-0  pb-3 px-5 uppercase font-bold text-2xl md:pt-5 ">
          Bitcoin
          <span className="text-[#FFA500] ml-2">Calculator</span>
        </p>
        <crypto-converter-widget
          shadow
          symbol
          live
          color="white"
          font-family="serif"
          background-color="#FFA500"
          border-radius="0.20rem"
          fiat="united-states-dollar"
          crypto="bitcoin"
          amount="1"
          decimal-places="2"
        ></crypto-converter-widget>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default Investments