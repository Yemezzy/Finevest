import React from 'react'
import OuterNav from '../Components/OuterNav'
import Footer from '../Components/Footer';
import { grey, green } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const Signup = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="bg-black text-white">
      <OuterNav />
      <div className="pt-24 w-full px-5 md:px-10 text-white">
        <div className="pb-10 pt-5 hfhfhhf flex justify-center">
          {/* <img
            className="w-[40%] md:block hidden pt-20"
            src="https://i.pinimg.com/564x/7f/ce/0f/7fce0f11acea7f6e161c3022580baf56.jpg"
            alt=""
          /> */}
          <section className="md:w-[20rem] p-3 bg-blac border shadow-inner shadow-[#FFA500]">
            <div className="flex justify-center items-center mt-3">
              <img
                src="../image/finvest-logo-1.png"
                alt=""
                className="w-[30%]"
              />
            </div>
            <p className="text-sm font-bold text-center mt-3">
              CREATE AN ACCOUNT
            </p>

            <div className="mt-3 text-sm font-semibold">
              <label htmlFor="">Full Name</label>
              <br />
              <input
                type="text"
                className="w-full mb-3 border  outline-none bg-transparent px-2 h-[2rem]"
              />

              <label htmlFor="">Email</label>
              <br />
              <input
                type="text"
                className="w-full mb-3 border outline-none bg-transparent px-2 h-[2rem]"
              />

              <label htmlFor="">Username</label>
              <br />
              <input
                type="text"
                className="w-full mb-3 border outline-none bg-transparent px-2 h-[2rem]"
              />

              <label htmlFor="">Password</label>
              <br />
              <input
                type="text"
                className="w-full mb-3 border outline-none bg-transparent px-2 h-[2rem]"
              />

              <label htmlFor="">Comfirm Password</label>
              <br />
              <input
                type="text"
                className="w-full mb-1 border outline-none bg-transparent px-2 h-[2rem]"
              />
              <p className="text-xs">
                <span className="bg-whit w-fit text-white">
                  <Checkbox
                    {...label}
                
                    sx={{
                      color: grey[50],
                      "&.Mui-checked": {
                        color: green[500],
                      },
                    }}
                    size="small"
                  />
                </span>
                I Agree To The Terms and Conditions.
              </p>
              <button className="w-full outline-none mt-1 bg-[#FFA500] px-2 h-[2rem]">
                Sign Up
              </button>
            </div>
          </section>

          <div className="w-[60%] px-10">
            <p className="md:text-xl md:pt-3  md:pb-5 uppercase font-bold ">
              Terms <span className="text-[#F9A403]">and</span> Conditions.
            </p>

            <div className="">
              <p className="text-sm font-semibold text-[#F9A403]">
                Account Registration
              </p>
              <p className="text-xs mt-2">
                In order to access certain features of the Website, you may be
                required to create an account. You agree to provide accurate,
                complete, and up-to-date information during the registration
                process. You are responsible for maintaining the confidentiality
                of your account information, including your password, and you
                agree to accept responsibility for all activities that occur
                under your account.
              </p>

              <p className="text-sm mt-5 font-semibold text-[#F9A403]">
                Prohibited Activities
              </p>
              <p className="text-sm font-semibold">
                When using the Website, you agree not to engage in any of the
                following activities
              </p>
              <ol className="mt-2 text-xs list-decimal pl-5">
                <li>Violating any applicable laws or regulations.</li>
                <li>
                  Impersonating any person or entity, or falsely representing
                  your affiliation with any person or entity.
                </li>
                <li>
                  Accessing or using the accounts of other users without
                  authorization.
                </li>
                <li>
                  Transmitting any viruses, worms, malware, or any other harmful
                  code.
                </li>
                <li>
                  Interfering with or disrupting the security, integrity, or
                  performance of the Website.
                </li>
                <li>
                  Collecting or harvesting any personally identifiable
                  information from the Website without permission.
                </li>
                <li>
                  Engaging in any activity that places an excessive load on the
                  infrastructure of the Website.
                </li>
              </ol>

              <p className="text-sm mt-5 font-semibold text-[#F9A403]">
                Privacy
              </p>
              <p className="text-xs mt-2">
                Wealth Frontier values your privacy and takes the protection of
                your personal information seriously. Our collection, use, and
                disclosure of your personal information are governed by our
                Privacy Policy. By using the Website, you consent to the
                collection, use, and disclosure of your personal information as
                described in our Privacy Policy.
              </p>

              <p className="text-xs mt-5 text-[#F9A403]">
                If you have any questions or concerns about these Terms, please
                contact us at{" "}
                <a href="">
                  <span className="underline">support@wealthfrontier.org</span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup