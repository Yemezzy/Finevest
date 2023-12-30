import React from 'react'
import MiniDrawer from '../components/drawer'
import PersistentDrawerLef from '../components/phone';

const Deposit = () => {
  return (
    <div>
      <div className="hidden md:block">
        <MiniDrawer>
          <div>
            <p className="md:px-0 px font-bold text-xl md:text-2xl md:pt-5 ">
              DEPOSIT
              <span className="text-[#FFA500] ml-2">FUNDS</span>
            </p>
            <p className="md:mt-2 md:text-base text-sm">
              You can make your deposit through our platforms:
            </p>
          </div>
          <div className="md:mt-10 mt-5 md:flex justify-between items-center">
            <section className="md:w-[58%] md:p-2 md:mb-0 mb-3  md:border-2 ">
              <p className="text-[#FFA500] mb-5 md:text-lg font-semibold">
                Deposit with crypto curriency
              </p>

              <label htmlFor="" className="">
                Payment Method
              </label>
              <br />
              <select className="md:w-[80%] w-full mb-3 outline-none bg-transparent border-2 px-3 py-2" />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="md:w-[80%] p-1 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>
              <br />

              <label htmlFor="" className="">
                Payment Address
              </label>
              <br />
              <input
                readOnly
                className="md:w-[80%] w-full mb-5 outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-full">Proceed</button>
            </section>

            <section className="md:w-[40%]  border-2 p-2">
              <p className=" mb-5 text-sm md:text-lg">
                <p className="">
                  <span className="text-[#FFA500]  font-bold">
                    IMPORTANT NOTE :
                  </span>
                  <br />
                  Pay exactly the amount you have imputed to pay, do not pay
                  lesser or higher than the amount you have placed and please
                  copy the exactly Blockchain wallet address.
                </p>
                <p className="mt-3">
                  Payments are updated instantly but in some cases where it is
                  taking too much time to update, kindly wait for 30minutes -
                  1hours, it will be updated, if after 2hours and it has not
                  been completed, kindly send a message to any of our Live Chat
                  Supports.
                </p>
              </p>
            </section>
          </div>

          <div className="mt-10 border-2  md:flex justify-between items-center">
            <section className="md:w-[50%] p-2   ">
              <p className="text-[#FFA500] mb-5 text-lg font-semibold">
                Deposit with Gift Cards
              </p>

              <label htmlFor="" className="">
                Select Avilable Card
              </label>
              <br />
              <select className="w-[100%] mb-3 outline-none bg-transparent border-2 px-3 py-2" />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="w-[100%] p-1 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-[100%]">
                Continue
              </button>
            </section>

            <section className="md:w-[48%] md:h-[20rem] p-2">
              <p className="text-center mt-5">
                <span className="text-[#FFA500] text-lg  font-bold">
                  Trusted Collaboration With
                </span>
              </p>

              <div className="mt-2">
                <div className="w-full">
                  <img
                    src="https://i0.wp.com/blog.giftcardstonaira.com/posts/wp-content/uploads/2021/01/gift-cards.png?fit=768%2C378&ssl=1"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 border-2  ">
            <p className="text-[#FFA500] px-2 mt-3  text-lg font-semibold">
              Deposit with Cashapp
            </p>

            <div className="h-[15rem] flex justify-center text-center items-center">
              <p className="md:text-3xl text-xl  font-bold">
                CASHAPP TEMPORARY UNAVILABLE!!
              </p>
            </div>
            {/* <div className="flex justify-between p-2 items-center">
            <section className="w-[50%]  ">

              <label htmlFor="" className="">
                Account Name
              </label>
              <br />
              <input
                placeholder="JOHN DOE"
                readOnly
                className="w-[100%] placeholder:text-white mb-3 outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="w-[100%] p-1 mb-3 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>

              <label htmlFor="" className="">
                Deposit Tag
              </label>
              <br />
              <input
                placeholder="$finvest"
                className="w-[100%] mb-3 placeholder:text-white outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-[100%]">
                Continue
              </button>
            </section>

            <section className="w-[48%] h-[20rem] p-2">
              <p className="text-center mt-5">
                <span className="text-[#FFA500] text-lg  font-bold">
                  Scan the QR Code for fast payment.
                </span>
              </p>

              <div className="mt-2">
                <div className="w-full flex justify-center">
                  <img
                    className="w-[50%]"
                    src="https://images.ctfassets.net/lzny33ho1g45/6TK1TbLNZQ4iHr0PjdZS2Y/ffb5c5646b914435f10b085b012bc78d/zap-qr-1.png?w=1400"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div> */}
          </div>
        </MiniDrawer>
      </div>
      <div className="block md:hidden">
        <PersistentDrawerLef>
          <div>
            <p className="md:px-0 px font-bold text-xl md:text-2xl md:pt-5 ">
              DEPOSIT
              <span className="text-[#FFA500] ml-2">FUNDS</span>
            </p>
            <p className="md:mt-2 md:text-base text-sm">
              You can make your deposit through our platforms:
            </p>
          </div>
          <div className="md:mt-10 mt-5 md:flex justify-between items-center">
            <section className="md:w-[58%] md:p-2 md:mb-0 mb-3  md:border-2 ">
              <p className="text-[#FFA500] mb-5 md:text-lg font-semibold">
                Deposit with crypto curriency
              </p>

              <label htmlFor="" className="">
                Payment Method
              </label>
              <br />
              <select className="md:w-[80%] w-full mb-3 outline-none bg-transparent border-2 px-3 py-2" />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="md:w-[80%] p-1 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>
              <br />

              <label htmlFor="" className="">
                Payment Address
              </label>
              <br />
              <input
                readOnly
                className="md:w-[80%] w-full mb-5 outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-full">Proceed</button>
            </section>

            <section className="md:w-[40%]  border-2 p-2">
              <p className=" mb-5 text-sm md:text-lg">
                <p className="">
                  <span className="text-[#FFA500]  font-bold">
                    IMPORTANT NOTE :
                  </span>
                  <br />
                  Pay exactly the amount you have imputed to pay, do not pay
                  lesser or higher than the amount you have placed and please
                  copy the exactly Blockchain wallet address.
                </p>
                <p className="mt-3">
                  Payments are updated instantly but in some cases where it is
                  taking too much time to update, kindly wait for 30minutes -
                  1hours, it will be updated, if after 2hours and it has not
                  been completed, kindly send a message to any of our Live Chat
                  Supports.
                </p>
              </p>
            </section>
          </div>

          <div className="mt-10 border-2  md:flex justify-between items-center">
            <section className="md:w-[50%] p-2   ">
              <p className="text-[#FFA500] mb-5 text-lg font-semibold">
                Deposit with Gift Cards
              </p>

              <label htmlFor="" className="">
                Select Avilable Card
              </label>
              <br />
              <select className="w-[100%] mb-3 outline-none bg-transparent border-2 px-3 py-2" />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="w-[100%] p-1 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-[100%]">
                Continue
              </button>
            </section>

            <section className="md:w-[48%] md:h-[20rem] p-2">
              <p className="text-center mt-5">
                <span className="text-[#FFA500] text-lg  font-bold">
                  Trusted Collaboration With
                </span>
              </p>

              <div className="mt-2">
                <div className="w-full">
                  <img
                    src="https://i0.wp.com/blog.giftcardstonaira.com/posts/wp-content/uploads/2021/01/gift-cards.png?fit=768%2C378&ssl=1"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 border-2  ">
            <p className="text-[#FFA500] px-2 mt-3  text-lg font-semibold">
              Deposit with Cashapp
            </p>

            <div className="h-[15rem] flex justify-center text-center items-center">
              <p className="md:text-3xl text-xl  font-bold">
                CASHAPP TEMPORARY UNAVILABLE!!
              </p>
            </div>
            {/* <div className="flex justify-between p-2 items-center">
            <section className="w-[50%]  ">

              <label htmlFor="" className="">
                Account Name
              </label>
              <br />
              <input
                placeholder="JOHN DOE"
                readOnly
                className="w-[100%] placeholder:text-white mb-3 outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <label htmlFor="" className="">
                Amount
              </label>
              <br />
              <div className="w-[100%] p-1 mb-3 h-[3rem] flex outline-none bg-transparent border-2 ">
                <p className="bg-[#FFA500] w-fit p-2 pt-2 font-bold text-black">
                  USD
                </p>
                <input
                  type="number"
                  className="w-full bg-transparent outline-none border-none h-[100%] p-2"
                />
              </div>

              <label htmlFor="" className="">
                Deposit Tag
              </label>
              <br />
              <input
                placeholder="$finvest"
                className="w-[100%] mb-3 placeholder:text-white outline-none bg-transparent border-2 px-3 py-2"
              />
              <br />

              <button className="bg-[#FFA500] py-3 px-7 w-[100%]">
                Continue
              </button>
            </section>

            <section className="w-[48%] h-[20rem] p-2">
              <p className="text-center mt-5">
                <span className="text-[#FFA500] text-lg  font-bold">
                  Scan the QR Code for fast payment.
                </span>
              </p>

              <div className="mt-2">
                <div className="w-full flex justify-center">
                  <img
                    className="w-[50%]"
                    src="https://images.ctfassets.net/lzny33ho1g45/6TK1TbLNZQ4iHr0PjdZS2Y/ffb5c5646b914435f10b085b012bc78d/zap-qr-1.png?w=1400"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div> */}
          </div>
        </PersistentDrawerLef>
      </div>
    </div>
  );
}

export default Deposit