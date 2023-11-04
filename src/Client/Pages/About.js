import React from 'react'
import OuterNav from '../Components/OuterNav'
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="">
      <OuterNav />
      <div className="pt-24 inset-0 -z-10 overflow-hidden bg-black text-white md:px-10">
        <svg
          class="absolute md:block hidden  left-[max(50%,25rem)] top-0 h-[34rem] w-[50rem] -translate-x-1/4 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible ">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          ></rect>
        </svg>
        <p className="md:px-0 md:text-left text-center px-5 font-bold text-2xl md:text-4xl md:pt-5 ">
          ABOUT
          <span className="text-[#FFA500] ml-2">US</span>
        </p>
        <p className="mt:mt-5 md:px-0 px-5 mt-3 font-medium text-lg ">
          WE ARE FINVEST
        </p>
        <p className="md:text-lg md:mt-3 mt-2 md:px-0 px-5">
          Investing in cryptocurrencies, particularly Bitcoin, has become a
          global phenomenon. At Wealth Frontier, we provide a secure and
          user-friendly platform to help you tap into the potential of digital
          assets. Whether you're a seasoned crypto enthusiast or new to the
          game, our experts are here to guide you through the intricacies of
          Bitcoin investment.
        </p>
        <p className="md:text-lg md:mt-5 mt-2 md:px-0 px-5">
          A place for everyone who wants to simply buy, invest and sell Bitcoins
          & Ethereum. Deposit, funds your wallet, instant buy/sells/invest of
          Bitcoins & Ethereum at fair price is guaranteed. Nothing extra. Join
          over 700,000 users from all over the wold satisfied with our services.
        </p>
        <p className="md:text-lg mt-5 md:px-0 px-5">
          We offer 100% guarantee on your investment protection for all our
          users assets with the industry’s leading security features, We provide
          a 24/7 live customer support.
        </p>

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
          <p className="md:text-4xl md:pt-10 text-center text-xl pb-5 md:pb-5 uppercase font-bold ">
            What <span className="text-[#F9A403]">our clients</span> say
          </p>

          <Testimonials />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About