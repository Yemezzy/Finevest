import React from 'react'
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import MiniDrawer from '../components/drawer';

const Home = () => {
  return (
    <div className="">
      <MiniDrawer>
        <div>
          <section>
            <p>
              Welcome <span className="text-sm font-semibold">JOHN DOE</span>
            </p>
          </section>

          <div className="mt-5 flex">
            <section className="w-[20rem] bb pr-0 p-10 rounded-md h-[10rem] border-2 ">
              <div className="flex gap-3 items-center">
                <MdAccountBalanceWallet className="w-14 h-14 pt-2" />
                <p className="mt-2 bbl font-bold text-2xl p-2 rounded-s-xl w-full bg-[#F9A403] text-white">
                  $ 0.00
                </p>
              </div>
              <p className="mt-2 bbl text-lg">Account Balance</p>
            </section>

            <section className="w-[20rem] rounded-md bb pr-0 p-10 ml-10 h-[10rem] border-2 ">
              <div className="flex gap-3 items-center">
                <MdAddCard className="w-14 h-14 pt-2" />
                <p className="mt-2 bbl font-bold text-2xl p-2 rounded-s-xl w-full bg-[#F9A403]  text-white">
                  $ 0.00
                </p>
              </div>
              <p className="mt-2 bbl text-lg">Total Deposit</p>
            </section>

            <section className="w-[20rem] bb rounded pr-0 p-10 ml-10 h-[10rem] border-2">
              <div className="flex gap-3 items-center">
                <FaHandHoldingUsd className="w-14 h-14" />
                <p className="mt-2 bbl font-bold text-2xl p-2 rounded-s-xl w-full bg-[#F9A403]  text-white">
                  $ 0.00
                </p>
              </div>
              <p className="mt-2 bbl text-lg">Total Withdrawal</p>
            </section>
          </div>

          <div className=" mt-16 ">
            <p className="mb-5 bbl text-lg font-semibold">Investment</p>
            <div className="flex gap-7">
              <section className="w-[15rem] bb rounded pl-0 p-5 h-[8rem] border-2">
                <p className="mt-2 pl-2 bbl font-bold text-xl">$ 0.00</p>
                <div className="flex items-center gap-2 mt-2 text-white w-full bg-[#F9A403]  p-1 rounded-e-xl">
                  <p className="bbl pl-2 ">Total Withdrawal</p>
                  <FaWallet className="w-7 h-7 pt-2 pb-1" />
                </div>
              </section>

              <section className="w-[15rem] rounded bb pl-0 p-5 h-[8rem] border-2 ">
                <p className="mt-2 pl-2 bbl font-bold text-xl">$ 0.00</p>
                <div className="flex items-center gap-2 text-white mt-2 w-full bg-[#F9A403]  p-1 rounded-e-xl">
                  <p className="bbl pl-2 ">Pending Investment</p>
                  <FaWallet className="w-7 h-7 pt-2 pb-1" />
                </div>
              </section>

              <section className="w-[15rem] rounded bb pl-0 p-5 h-[8rem] border-2">
                <p className="mt-2 pl-2 bbl font-bold text-xl">$ 0.00</p>
                <div className="flex items-center gap-2 text-white mt-2 w-full bg-[#F9A403]  p-1 rounded-e-xl">
                  <p className="bbl pl-2 ">Pending Withdraw</p>
                  <FaWallet className="w-7 h-7 pt-2 pb-1" />
                </div>
              </section>

              <section className="w-[15rem] rounded pl-0 p-5 h-[8rem] border-2 bb">
                <p className="mt-2 pl-2 bbl font-bold text-xl">$ 0.00</p>
                <div className="flex items-center gap-2 text-white w-full bg-[#F9A403] mt-2 p-1 rounded-e-xl">
                  <p className="bbl pl-2 ">Refferal Earn</p>
                  <FaWallet className="w-7 h-7 pt-2 pb-1" />
                </div>
              </section>
            </div>

            <div className="mt-16">
              <p className=" bbl text-lg font-semibold mb-3">Chart</p>
              <div>
                <div className=" ">
                  <div class="tradingview-widget-container mmm">
                    <iframe
                      scrolling="no"
                      allowtransparency="false"
                      frameborder="0"
                      className="msj"
                      src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22swiftcryptrade.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22swiftcryptrade.com%2F%22%7D"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MiniDrawer>
    </div>
  );
}

export default Home