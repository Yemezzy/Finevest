import React, { useEffect } from "react";
import OuterNav from "./Components/OuterNav";
import { useRef } from "react";
import {
  FaAmazonPay,
  FaArrowAltCircleDown,
  FaCoins,
  FaCreativeCommonsShare,
  FaGlobe,
  FaMobileAlt,
  FaUserLock,
} from "react-icons/fa";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Lottie from "lottie-react";
import wallet from "./Components/animation_lnkbooh5.json";
import world from "./Components/azA1eXvhH4.json";
import Aos from "aos";
import "aos/dist/aos.css";
import Switch from "./Components/Switch";
import Sector from "./Components/Api";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const Startpage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const constraintsRef = useRef(null);

  return (
    <div className="bg-black">
      <OuterNav />
      <div className="bg-black md:py-28 hdhhd md: text-white">
        <div className="md:grid grid-cols-2 gap-2">
          <section
            data-aos="zoom-in"
            className="nnn flex md:hidden  h-[20rem] mr-5 justify-center items-center "
          >
            <img
              className="w-[95%] md:mt-5 pt-7"
              src="https://i.pinimg.com/564x/0b/f0/1a/0bf01a191e33eceb6651443a2ee490f8.jpg"
              alt=""
            />
          </section>
          <section className=" md:mt-10">
            <p
              className="text-2xl md:text-4xl md:px-0 px-5 md:pl-14 font-extrabold"
              data-aos="fade-right"
            >
              AIM FOR GROWTH BY STOCK{" "}
              <span className="text-[#FFA500]"> INVESTMENT</span>
            </p>
            <p
              className="md:text-lg pr-5 mt-3 md:mt-10 pl-5  md:pl-14 font-semibold"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              aut, assumenda et eligendi explicabo maxime cum iste ipsa
              cupiditate voluptas temporibus expedita amet qui modi itaque neque
              ab tempore impedit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Esse, saepe!
            </p>
            <div className="grid mt-5 pr-2 items-end md:mt-10 md:pl-6 grid-cols-4">
              <p
                className="text-center md:text-xs text-[10px] text-gray-400"
                data-aos="flip-left"
              >
                <span className="md:text-xl text-sm text-[#FFA500] font-bold">
                  $198.76B
                </span>{" "}
                <br /> COOL <br className="md:hidden block" /> NUMBER
              </p>
              <p
                className="border-l-2 text-center md:text-xs text-[10px] text-gray-400"
                data-aos="flip-left"
              >
                <span className="md:text-xl text-sm text-[#FFA500] font-bold">
                  243K
                </span>{" "}
                <br /> DAILY TRANSACTIONS
              </p>
              <p
                className="border-l-2 text-center text-[10px] md:text-xs text-gray-400"
                data-aos="flip-left"
              >
                <span className="md:text-xl text-sm text-[#FFA500] font-bold">
                  39K
                </span>{" "}
                <br /> ACTIVE ACCOUNTS
              </p>
              <p
                className="border-l-2 text-center  text-[10px] md:text-xs text-gray-400"
                data-aos="flip-left"
              >
                <span className="md:text-xl text-sm text-[#FFA500] font-bold">
                  127
                </span>{" "}
                <br /> TRUSTED COUNTRIES
              </p>
            </div>
          </section>

          <section
            data-aos="zoom-in"
            className="nnn md:flex hidden h-[20rem] mr-5 justify-center items-center "
          >
            <img
              className="w-[95%] md:mt-5 pt-7"
              src="https://i.pinimg.com/564x/0b/f0/1a/0bf01a191e33eceb6651443a2ee490f8.jpg"
              alt=""
            />
          </section>
        </div>
      </div>
      <div className="text-lg bg-white font-bold">
        <marquee behavior="" direction="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          error!
        </marquee>
      </div>

      <div className="md:pt-20 bnbnbn pt-10  bg-[black]">
        <div className="md:grid text-center grid-cols-3 text-white px-10 justify-center items-center  bbxbb">
          <section className="flex flex-col items-center">
            <Lottie
              animationData={wallet}
              className="md:w-[40%] w-[25%]"
              data-aos="zoom-in-up"
            />
            <p
              className="md:text-2xl text-lg font-semibold"
              data-aos="flip-right"
            >
              Ready To Start Earning?
            </p>
            <p
              className="text-sm font-light text-gray-400"
              data-aos="flip-right"
            >
              Signup now. Deposit and Invest to start earning.
            </p>
          </section>

          <section className="flex flex-col items-center justify-center">
            <div
              data-aos="zoom-in-up"
              className="w-full flex justify-center h-full text-center"
            >
              <FaCoins className="md:w-[20%] md:h-[20%] w-[15%] h-[15%] text-[#E8505B] mt-12" />
            </div>
            <p
              className="md:text-2xl text-lg font-semibold"
              data-aos="flip-right"
            >
              Deposit Money Into Your Account
            </p>
            <p
              className="text-sm font-light text-gray-400"
              data-aos="flip-right"
            >
              Deposit Bitcoin or Ethereum to you Finvest Investment account and
              start investing.
            </p>
          </section>
          <section className="flex flex-col items-center mt-8">
            <div
              data-aos="zoom-in-up"
              className="w-full flex justify-center h-full text-center"
            >
              <FaArrowAltCircleDown className="md:w-[20%] md:h-[20%] w-[15%] h-[15%] text-[#E8505B]" />
            </div>
            <p
              className="md:text-2xl text-lg font-semibold"
              data-aos="flip-right"
            >
              Withdraw Your Earnings
            </p>
            <p
              className="text-sm font-light text-gray-400"
              data-aos="flip-right"
            >
              Withdraw your earnings after your investment accrual period.
            </p>
          </section>
        </div>

        <div className="md:px-14 px-5 bg-black md:pt-20">
          <section className="bg-[#242323] md:text-left text-center text-white md:flex items-center justify-between md:px-10 p-3 rounded-lg md:h-[10rem]">
            <div>
              <p className="md:text-xl mt-2 text-[#beb9b9] text-lg font-medium md:font-bold">
                GET STARTED TODAY WITH BITCOIN AND ETHEREUM INVESTMENT
              </p>
              <p className="md:text-lg text-[#beb9b9] md:my-0 mt-2 text-sm font-medium">
                Open account for free start investing & trading
              </p>
            </div>

            <button className="bg-[#F9A403] mt-5 md:mt-0 text-sm font-bold rounded-lg w-full md:w-[10rem] h-[3rem]">
              REGISTER NOW
            </button>
          </section>
        </div>

        <div className="md:mt-20 mt-14 mb-20 px-5 md:px-0 md:ml-14 text-white ">
          <p className="md:text-4xl text-xl font-bold mb-3">
            Calculate Earnings
          </p>
          <div className="md:flex gap-2 items-center ">
            {/* <img
                className="bbbbbbb"
                src="https://i.pinimg.com/236x/bb/62/1c/bb621ce0494ea02269b64abf004e3d6b.jpg"
                alt=""
              /> */}

            <section>
              <label
                htmlFor=""
                className="md:text-xl text-sm ml-1 font-medium mb-2"
              >
                Amount
              </label>
              <br />
              <input
                placeholder="Enter Amount"
                type="text"
                className=" mr-5  mb-5 md:mb-0 rounded-md px-3 bg-[#191818] outline-none mt-2 h-[3rem] w-full md:w-[15rem]"
              />
            </section>
            <section>
              <label
                htmlFor=""
                className="md:text-xl mt-5 md:mt-0 text-sm ml-1 font-medium mb-2"
              >
                Investment Plan
              </label>
              <br />
              <select
                placeholder=""
                name=""
                id=""
                className="mt-2 bg-[#191818] px-3 rounded-md outline-none h-[3rem] w-full md:w-[15rem]"
              >
                <option value="">Select a Plan</option>
              </select>
            </section>

            <button className=" h-[3rem] font-semibold uppercase rounded-md bg-[#FFA500] w-full md:w-[10rem] mt-5 md:mt-8">
              calculate
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="md:grid bg-black grid-cols-2">
          <section className="hidd md:flex w- text-center justify-center items-center">
            <img
              src="https://i.pinimg.com/564x/52/52/ba/5252ba764b3e10f158dd80ebe5dae06c.jpg"
              alt=""
            />
          </section>
          <section className="text-white md:pt-12 px-5">
            <p className=" font-bold text-2xl md:text-4xl md:pt-16 ">
              ABOUT
              <span className="text-[#FFA500] ml-2">US</span>
            </p>
            <p className="mt:mt-5 mt-3 font-medium text-lg ">WE ARE FINVEST</p>
            <p className="md:text-lg md:mt-0 mt-2">
              A place for everyone who wants to simply buy, invest and sell
              Bitcoins & Ethereum. Deposit, funds your wallet, instant
              buy/sells/invest of Bitcoins & Ethereum at fair price is
              guaranteed. Nothing extra. Join over 700,000 users from all over
              the wold satisfied with our services.
            </p>
            <p className="md:text-lg mt-3">
              We offer 100% guarantee on your investment protection for all our
              users assets with the industry’s leading security features, We
              provide a 24/7 live customer support.
            </p>

            <div className="flex mt-7 md:text-sm text-[10px] gap-2">
              <button className="px-3 lololo py-2 rounded-sm">Read More</button>
              <button className="px-3 py-2 rounded-sm bg-[#FFA500]">
                VIEW COMPANY REGISTRATION
              </button>
              <button className="px-3 py-2 rounded-sm bg-[#FFA500]">
                VIEW COMPANY CERTIFICATE
              </button>
            </div>
          </section>
        </div>

        <div className="md:pt-24 pt-16 px-5 md:pl-0 text-white bg-[black]">
          <p className="md:text-4xl text-2xl md:pb-10 uppercase font-bold mb-5 md:text-center">
            Why choose us
          </p>

          <div className="md:px-10 lg:px-20 md:pr-0 pr-5 gap-5 md:grid md:grid-flow-row justify-center md:grid-cols-2 lg:grid-cols-2">
            <section className="flex p-5 md:md-0 mb-3 border-2 border-[#F9A403] items-center gap-3">
              <FaUserLock className="md:w-24 md:h-24 w-7 h-7 text-[#F9A403]" />
              <div className="">
                <p className="md:text-xl font-semibold mt-3">STRONG SECURITY</p>
                <p className="text-sm pr-5 text-[#969696] ">
                  Protection against DDoS attacks, full data encryption
                </p>
              </div>
            </section>

            <section className="flex border-2 md:md-0 mb-3 p-5 border-[#F9A403] items-center gap-3">
              <FaGlobe className="md:w-24 md:h-24 w-7 h-7 text-[#F9A403]" />
              <div className="">
                <p className="md:text-xl font-semibold mt-3">WORLD COVERGE</p>
                <p className="text-sm pr-5 text-[#969696] ">
                  Providing services in 99% countries around the globe.
                </p>
              </div>
            </section>

            <section className="flex border-2 md:md-0 mb-3 p-5 border-[#F9A403]  items-center gap-3">
              <FaMobileAlt className="md:w-20 md:h-20 w-7 h-7 text-[#F9A403]" />
              <div className="">
                <p className="md:text-xl font-semibold mt-3">MOBILE APP</p>
                <p className="text-sm pr-5 text-[#969696] ">
                  Trading via our Mobile App, Available in Play Store & App
                  Store
                </p>
              </div>
            </section>

            <section className="flex md:h-[10rem] md:md-0 mb-3 border-2 p-5 border-[#F9A403]  items-center gap-3">
              <FaCreativeCommonsShare className="md:w-24 md:h-24 w-10 h-10 text-[#F9A403]" />
              <div className="">
                <p className="md:text-xl font-semibold mt-3">HIGH LIQUIDITY</p>
                <p className="text-sm pr-5 text-[#969696] ">
                  Fast access to high liquidity orderbook for top currency pairs
                </p>
              </div>
            </section>

            <section className="flex md:h-[10rem] border-2 p-5 border-[#F9A403]  items-center gap-3">
              <FaAmazonPay className="md:w-20 md:h-20 w-10 h-10 text-[#F9A403]" />
              <div className="">
                <p className="md:text-xl font-semibold mt-3">PAYMENT OPTIONS</p>
                <p className="text-sm pr-5 text-[#969696] ">
                  Popular methods: Visa, MasterCard, bank transfer,
                  cryptocurrency
                </p>
              </div>
            </section>
          </div>

          <div className="flex-col mt-20 items-center flex justify-center text-center w-full">
            <Lottie
              animationData={world}
              className="md:w-[50%]"
              // data-aos="zoom-in-up"
            />
            <p className="text-3xl font-bold uppercase mt md:mt-5">
              We are Global{" "}
            </p>
            <p className="text-5xl font-bold text-[#F9A403]">FINEVEST</p>
          </div>
        </div>
        <Sector />

        <div className="bg-black text-white px-5 md:px-14 pb-10 md:pb-0 py-20 md:py-28">
          <p className="md:text-4xl text-2xl pb-10 uppercase font-bold ">
            How it work
          </p>

          <div className="md:grid lg:grid lg:grid-cols-3 md:grid-cols-2 bbn gap-5">
            <section className="mb-5 md:mb-0 rounded-md p-5 border-[#F9A403] md:h-[12rem] border-2">
              <div className="flex items-center">
                <p className="p-3 bg-[#F9A403] md:py-3 py-2 rounded-lg md:w-[3.5rem] text-center m:text-xl font-extrabold">
                  1.
                </p>

                <p className="md:text-2xl text-lg font-bold ml-5">Sign up:</p>
              </div>
              <p className="mt-3 md:text-lg">
                Create an account on FineVest by providing your details
                securely.
              </p>
            </section>

            <section className="mb-5 md:mb-0 rounded-md p-5 border-[#F9A403]  md:h-[12rem] border-2">
              <div className="flex items-center">
                <p className="p-3 bg-[#F9A403] md:py-3 py-2 rounded-lg md:w-[3.5rem] text-center md:text-xl font-extrabold">
                  2.
                </p>

                <p className="md:text-2xl text-lg font-bold ml-5">
                  Verify identity:
                </p>
              </div>
              <p className="mt-3 mb:text-lg">
                Complete the KYC process to ensure a safe and compliant
                investment environment.
              </p>
            </section>

            <section className="mb-5 md:mb-0 rounded-md p-5 border-[#F9A403]  md:h-[12rem] border-2">
              <div className="flex items-center">
                <p className="p-3 md:py-3 py-2 bg-[#F9A403] rounded-lg md:w-[3.5rem] text-center md:text-xl font-extrabold">
                  3.
                </p>

                <p className="md:text-2xl text-lg font-bold ml-5">
                  Deposit funds:
                </p>
              </div>
              <p className="mt-3 md:text-lg">
                Fund your account using various payment options, including
                cryptocurrencies and fiat.
              </p>
            </section>

            <section className="mb-5 md:mb-0 rounded-md p-3 border-[#F9A403] md:h-[12rem]  border-2">
              <div className="flex items-center">
                <p className="p-3 bg-[#F9A403] md:py-3 py-2 rounded-lg md:w-[3.5rem] text-center md:text-xl font-extrabold">
                  4.
                </p>

                <p className="md:text-2xl text-lg mb-3 md:mb-0 font-bold ml-5">
                  Explore assets:
                </p>
              </div>
              <p className="my-3 md:text-lg">
                Browse a diverse range of investment packages and select the
                ones that align with your investment goals.
              </p>
            </section>

            <section className="mb-5 md:mb-0 rounded-md p-5 border-[#F9A403] md:h-[12rem]  border-2">
              <div className="flex items-center">
                <p className="p-3 md:py-3 py-2 bg-[#F9A403] rounded-lg md:w-[3.5rem] text-center md:text-xl font-extrabold">
                  5.
                </p>

                <p className="md:text-2xl text-lg font-bold ml-5">
                  Invest & monitor:
                </p>
              </div>
              <p className="mt-3 md:text-lg">
                Make your investments and keep track of your portfolio's
                performance in real-time.
              </p>
            </section>

            <section className="rounded-md p-5 border-[#F9A403] md:h-[12rem]  md:border-2 ">
              <div className="flex items-center">
                <p className="p-3 md:py-3 py-2 bg-[#F9A403] rounded-lg md:w-[3.5rem] text-center md:text-xl font-extrabold">
                  6.
                </p>

                <p className="md:text-2xl text-lg font-bold ml-5">
                  Withdraw profits:
                </p>
              </div>
              <p className="mt-3 md:text-lg">
                Withdraw your profits effortlessly whenever you desire.
              </p>
            </section>
          </div>
        </div>

        <div className="text-white md:px-14 px-5 mt-10 md:mt-20">
          <p className="md:text-4xl text-left md:text-center text-2xl pb-5 md:pb-10 uppercase font-bold ">
            FAQ
          </p>

          <div className="md:grid mt-  gap-3 md:grid-cols-2">
            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {" "}
                    <p className="font-semibold">How does it work?</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit font-bold mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="font-semibold">Can I trust you?</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {" "}
                    <p className="font-semibold">
                      What types of NFT can be Staked?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="font-semibold">
                      Do I need to tell you all my passwords?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
          </div>
        </div>

        <div className="md:pt-28 pt-16  md:px-10 px-5 text-white">
          <p className="md:text-4xl md:pt-10 text-center text-xl md:pb-5 uppercase font-bold ">
            What <span className="text-[#F9A403]">our clients</span> say
          </p>

          <Testimonials />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Startpage;
