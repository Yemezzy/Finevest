import React from 'react'
import OuterNav from '../Components/OuterNav'
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { grey } from "@mui/material/colors";
import Footer from '../Components/Footer';


const Login = () => {
       const labels = {
         0.5: "Useless",
         1: "Useless+",
         1.5: "Poor",
         2: "Poor+",
         2.5: "Ok",
         3: "Ok+",
         3.5: "Good",
         4: "Good+",
         4.5: "Excellent",
         5: "Excellent+",
    };
    
    function getLabelText(value) {
       if (labels == value) {
         setShow("Sent!! ✔");
       }
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
 
    }
      const [value, setValue] = React.useState(2);
      const [show, setShow] = React.useState("");
      const [hover, setHover] = React.useState(-1);

  return (
    <div>
      <OuterNav />
      <div className="py-24 bg-black w-full px-5 md:px-10 text-white">
        <div className="flex flex-col items-center gap-5">
          <section className="md:w-[20rem] p-3 bg-blac border shadow-inner shadow-[#FFA500]">
            <div className="flex justify-center items-center mt-3">
              <img
                src="../image/finvest-logo-1.png"
                alt=""
                className="w-[30%]"
              />
            </div>
            <p className="text-sm font-bold text-center mt-3">
              Sign in to your account
            </p>

            <div className="mt-3 text-sm font-semibold">
              <label htmlFor="">Email or Username</label>
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

              <button className="w-full outline-none mt-1 bg-[#FFA500] px-2 h-[2rem]">
                Sign in
              </button>
              <p className="text-xs mt-1">
                Dont have an account with us?{" "}
                <span className="text-[#FFA500]">Signup here</span>
              </p>
            </div>
          </section>

          <section className="md:w-[20rem] text-sm font-semibold p-3  border shadow-inner shadow-[#FFA500]">
            <p className="mb-5  text-[#F9A403]">Finvest</p>
            <p>
              We offer 100% guarantee on your investment protection for all our
              users assets with the industry’s leading security features, We
              provide a 24/7 live customer support.
            </p>
            <div className="mt-5">
              <p>Rate Us</p>

              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                      setValue(newValue);
                      setTimeout(() => {
                        setShow("Sent!!");
                      }, 1000);
                      setTimeout(() => {                       
                          setShow("");
                      }, 2000);
                  }}
                  onChangeActive={(event, newHover) => {
                      setHover(newHover);
                      
                  }}
                  emptyIcon={
                    <StarIcon
                      style={{ opacity: 0.55, color: grey[50], border: 2 }}
                      fontSize="inherit"
                    />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
                          </Box>
                          <p>{show}</p>
            </div>
          </section>
              </div>
              <Footer/>
      </div>
    </div>
  );
}

export default Login