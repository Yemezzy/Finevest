import React from 'react'
import MiniDrawer from '../components/drawer'

const Withdrawl = () => {
  return (
    <div>
      <MiniDrawer>
        <div>
          <p className="md:px-0 px-5 font-bold text-2xl md:pt-5 ">
            WITHDRAW
            <span className="text-[#FFA500] ml-2">FUNDS</span>
          </p>

          <div className="mt-5">
            <p className="mt-2">
              {" "}
              <span className="text-[#FFA500]">Note: </span>withdrawals are
              completed within 24hours
            </p>
          </div>

          <div>
            <p></p>
            <div className="mt-2 flex">
              <section className="bb p-5 w-[50%]">
                <label htmlFor="">Select Withdrawal method</label>
                <br />
                <select
                  name=""
                  id=""
                  className="border-2 px-3 bg-transparent h-[3rem] w-[100%] outline-none"
                ></select>
                <br />
                <br />

                <label htmlFor="">Withdraw Amount</label>
                <div className="w-[100%] p-1 h-[3rem] flex outline-none bg-transparent border-2 ">
                  <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                    USD
                  </p>
                  <input
                    type="number"
                    className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                  />
                </div>
                <p className="text-xs mt-1">
                  Min amount & 5000.00 Max amount 1000000.00
                </p>
                <br />

                <label htmlFor="">Bitcoin wallet address</label>
                <br />
                <input
                  id=""
                  className="border-2 px-3 bg-transparent h-[3rem] w-[100%] outline-none"
                />
                <br />
                <br />

                <label htmlFor="">Cashapp or paypal tag/email</label>
                <br />
                <input
                  id=""
                  className="border-2 px-3 bg-transparent h-[3rem] w-[100%] outline-none"
                />
                <br />
                <br />

                <label htmlFor="">Withdrawal Account Name</label>
                <br />
                <input
                  id=""
                  className="border-2 px-3 bg-transparent h-[3rem] w-[100%] outline-none"
                />
                <br />
                <br />

                <label htmlFor="">Additional Note</label>
                <br />
                <textarea
                  id=""
                  className="border-2 p-2 bg-transparent h-[10rem] w-[100%] outline-none"
                />
                <br />
                <button className="bg-[#FFA500] py-3 px-7 w-[100%]">
                  Continue
                </button>
              </section>

              <section className="bg-[#FFA500] font-semibold text-lg p-5 h-fit text-black w-[50%]">
                <p className=" text-center">WITHDRAWAL RESUME</p>
                <div className="mt-10">
                  <p>
                    Withdrawal method -{" "}
                    <span className="uppercase">bitcoin</span>
                  </p>
                  <p className="mt-5">
                    Withdrawal Amount -{" "}
                    <span className="uppercase">500 usd</span>
                  </p>
                  <p className="mt-5">
                    Bitcoin wallet address -{" "}
                    <span className="">bqiemru8449hru4hbmdklekn</span>
                  </p>
                  <p className="mt-5">
                    Cashapp or paypal tag/email - <span className="">null</span>
                  </p>
                  <p className="mt-5">
                    Withdrawal Account Name -{" "}
                    <span className="uppercase">null</span>
                  </p>
                  <p className="mt-5">
                    Additional Note -{" "}
                    <span className="">Withdrawal For food and bills.</span>
                  </p>
                  <button className="bg-black text-white py-3 px-7 mt-10 w-[100%]">
                    Withdraw now
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </MiniDrawer>
    </div>
  );
}

export default Withdrawl