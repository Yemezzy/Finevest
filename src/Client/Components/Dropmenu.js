import React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {VscTriangleDown} from "react-icons/vsc"

const Dropmenu = () => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3"
        >
          <p className="mb-1 ml-5 font-bold">menu</p>
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
          <VscTriangleDown/>
          </motion.div>
        </motion.button>

        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div className="mt-5 p-5 text-white font-bold bg-black">
            <motion.li variants={itemVariants}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/investment-plans">Investment plans</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/About-us">About</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/contact-us">Contact</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/sign-up ">
                <li className="md:px-5 mt-2 md:py-2 text-center bg-[white] text-black rounded-md">
                  Sign up
                </li>
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/login ">
                <li className="md:px-5 md:py-2 text-center bg-[white] text-black mt-2 rounded-md">
                  Login
                </li>
              </Link>
            </motion.li>
          </div>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Dropmenu;
