import Winlada from "../../assets/images/WINLADS.png";
import Menu from "../../assets/images/menu.png";
import Jeep from "../../assets/images/newjeep.png";
import logo from "../../assets/images/logo/logo.png";
import ellipse from "../../assets/images/ellipse.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const logoAnimate = {
  offscreen: { y: -30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

function Showcase() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleBtnClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // ----------------------------------------

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="grid grid-cols-1 gap-2 lg:grid-cols-2"
      style={{
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div>
        <div>
          {/* Toggle button for mobile and tablet screens */}
          <button
            onClick={handleBtnClick}
            className="toggle-btn lg:hidden items-end fixed right-4 z-10"
          >
            <img src={Menu} />
          </button>

          {/* Normal navigation bar for screens larger than 1024px */}
          <div
            className={`hidden lg:flex justify-between border-black text-black px-2 py-3 rounded-md 2xl:py-6 items-center absolute lg:right-12 font-bold md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl text-xs`}
          >
            <span className="navlinks px-2">
              <Link to="">Our Partners</Link>
            </span>
            <span className="navlinks px-2">
              <Link to="">Become A Partner</Link>
            </span>
            <span className="navlinks px-2">
              <Link to="">Giveaway</Link>
            </span>
            <span className="navlinks px-2">
              <Link to="">Shop</Link>
            </span>
            <span className="border-black 4xl:text-4xl px-4 py-3 rounded-md 2xl:py-6 items-center text-white buttonBgBlack top-20 lg:right-12">
              Contact Us
            </span>
          </div>

          {/* Toggleable navigation bar for mobile and tablet screens */}
          {isNavOpen && (
            <div className="lg:hidden flex flex-col items-end fixed right-0">
              <span className="navlinks px-2 mt-10 mr-[10px]">
                <Link to="">Our Partners</Link>
              </span>
              <span className="navlinks mt-1 px-2 mr-[10px]">
                <Link to="">Become A Partner</Link>
              </span>
              <span className="navlinks mt-1 px-2 mr-[10px]">
                <Link to="">Giveaway</Link>
              </span>
              <span className="navlinks mt-1 px-2 mr-[10px]">
                <Link to="">Shop</Link>
              </span>
              <span className="border-black 4xl:text-4xl px-4 py-3 rounded-md 2xl:py-6 items-center text-white buttonBgBlack top-20 lg:right-12 mr-[10px] mt-1">
                Contact Us
              </span>
            </div>
          )}
        </div>

        <div>
          <img src={ellipse} />
        </div>

        <img
          className="hidden lg:inline"
          src={logo}
          alt="logo"
          style={{ position: "absolute", top: "0px" }}
        />

        <motion.img
          variants={imageAnimate}
          className="hidden lg:block lg:w-[700px] 4xl:w-[1600px] xl:w-[800px] special:w-[1500px]"
          src={Jeep}
          style={{
            position: "absolute",
            top: "15%",
            left: "-10%",
            zIndex: "2",
          }}
        />

        <motion.img
          className="block lg:hidden"
          src={Jeep}
          style={{
            position: "absolute",
            top: "15%",
            left: "0px",
            // width: "700px",
            zIndex: "2",
          }}
        />
      </div>

      <div className="flex flex-col space-y-4 mx-2 mt-10 md:mt-0 lg:pr-10">
        <div
          className="hidden lg:block"
          style={{ padding: "22% 0% 0% 0%" }}
        >

        </div>

        <div className="flex justify-end z-10">
          <img className="w-[900px] 4xl:w-[800px]" src={Winlada} alt="logo" />
        </div>
        
        <div className="pt-4 dashcontent-group z-10">
          <p className="font-bold text-right text-xl md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
            With over 650+ businesses across 1000+ stores where you can
            accessexclusive discounts
          </p>
          <p className="font-bold text-right text-xl md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
            Australia Widefrom only $19.99 per month, opt-out anytime
          </p>
        </div>
        
        <div className="flex justify-end z-10">
          <Link to="/register">
            <div
              className="flex justify-center px-4 py-4 2xl:px-8  border-black 2xl:py-6 2xl:text-xl text-md font-bold items-center text-white buttonBgBlack frontbtns"
              style={{
                //   display: "inline-block",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign Up For Free
            </div>
          </Link>
        </div>
        
      </div>
    </motion.div>
  );
}

export default Showcase;
