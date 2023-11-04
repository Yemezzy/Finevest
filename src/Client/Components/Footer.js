import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="text-center mt-16 mt:mt-28 py-3 border-y border-[#343434]">
        <p className="text-[#F9A403]  font-extrabold text-lg "> FINVEST</p>
      </div>{" "}
      <div className="text-[#737171] border-b border-[#343434] md:px-14 px-5 py-10 text-sm">
        <div className="mb-10 text-[#737171]  text-center">
          <p className="text-2xl text-[#737171]  font-bold">Our newsletter</p>
          <p>Sign up to receive investment news and bonuses</p>
          <div className="flex justify-center">
            <div className="mt-3 h-[3rem] flex items-center rounded-r-md rounded-l-md w-[25rem] border border-[#FFA500]">
              <input
                type="text"
                className="outline-none w-full h-full bg-transparent px-3 rounded-sm"
                placeholder="Enter youe email here"
              />
              <button className="text-xs h-full text-white uppercase py-2 rounded-r-md px-2 bg-[#FFA500]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p>
          Finvest (Incorporation number : 03058359 ) been confirmedby entering
          the data in the UK Companies House Register. Our budding company
          offers a highly profitable investment for everyone. Years of trading
          experience in the multi-currency markets provide a stable income not
          only for company but also for numerous clients around the world. Today
          professional team of traders is willing to offer investment services
          of international class. With the development of cryptocurrency
          exchanges we are to carry on non-stop trade and predict the movement
          of Bitcoin exchange rate in order to maximize profits. Big Apple
          Investment uses SSL (Secure Socket Layer) technology to encrypt your
          transactions and keep your personal information as secure as possible.
          This automated technology is used by major banks and other financial
          companies who have information on the web. Most browsers support SSL
          encryption, however, if for any reason your browser is not able to
          support the technology., you will receive an instant notification. You
          can verify wether web page is SSL compliant by checking the address.
          It should start with "https://..." - the "s"stands for "secure".
          Prices displayed on the website may be affected by exchange rate and
          price movements thereby affecting your investment return therefrom.
          FINVEST LTD is registered in, First Floor Thavies Inn, 3-4 Holborn
          Circus, London, EC1N 2HA, UK |
        </p>
      </div>
      <div className="text-center text-[#F9A403] p-2 text-xs">
        <p>Copyright © 2021 FINVEST Limited. | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer