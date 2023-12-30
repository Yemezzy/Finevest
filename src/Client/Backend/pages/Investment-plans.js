import React from 'react'
import MiniDrawer from '../components/drawer';
import PersistentDrawerLef from '../components/phone';
// import PersistentDrawerLef from '../components/phone';

const Investment = () => {
  return (
    <div>
      <div className="md:hidden block">
        <MiniDrawer>
          <div className=" text-white">
            <p className=" font-bold text-xl md:text-2xl md:pt-5 ">
              INVESTMENT
              <span className="text-[#FFA500] ml-2">PLANS</span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:grid-rows-none grid-rows-4 gap-4 md:mt-10 mt-7">
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
                    Invest with balance
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
                    Invest with balance
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
                    Invest with balance
                  </button>
                </div>
              </section>

              <section className=" border p-2 h-[20rem]">
                <p className="text-center text-sm mt-3 text-[#FFA500]">
                  Gold Plan
                </p>
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
                    Invest with balance
                  </button>
                </div>
              </section>
            </div>

            <div className="mt-10">
              <coingecko-coin-converter-widget
                coin-id="bitcoin"
                currency="usd"
                background-color="#ffa500"
                font-color="#4c4c4c"
                locale="en"
              ></coingecko-coin-converter-widget>
              <div
                class="cryptohopper-web-widget"
                data-id="8"
                data-chart_color="#ffa500"
                data-coins="bitcoin"
              ></div>
            </div>
          </div>
        </MiniDrawer>
      </div>
      <div className="md:hidden block">
        <PersistentDrawerLef>
          <div className=" text-white">
            <p className=" font-bold text-xl md:text-2xl md:pt-5 ">
              INVESTMENT
              <span className="text-[#FFA500] ml-2">PLANS</span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:grid-rows-none grid-rows-4 gap-4 md:mt-10 mt-7">
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
                    Invest with balance
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
                    Invest with balance
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
                    Invest with balance
                  </button>
                </div>
              </section>

              <section className=" border p-2 h-[20rem]">
                <p className="text-center text-sm mt-3 text-[#FFA500]">
                  Gold Plan
                </p>
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
                    Invest with balance
                  </button>
                </div>
              </section>
            </div>

            <div className="mt-10">
              <coingecko-coin-converter-widget
                coin-id="bitcoin"
                currency="usd"
                background-color="#ffa500"
                font-color="#4c4c4c"
                locale="en"
              ></coingecko-coin-converter-widget>
              <div
                class="cryptohopper-web-widget"
                data-id="8"
                data-chart_color="#ffa500"
                data-coins="bitcoin"
              ></div>
            </div>
          </div>
        </PersistentDrawerLef>
      </div>
    </div>
  );
}

export default Investment