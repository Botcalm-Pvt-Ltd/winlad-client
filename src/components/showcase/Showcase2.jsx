import Curve from "../../assets/images/showacase/curve.png";
import Jip from "../../assets/images/showacase/jip.png";
import "./Showcase2.css";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import WindlandText from "../../assets/images/showacase/windland.png";

const Showcase2 = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full  bg-[#A0E6EB] ">
      <div className="flex flex-col lg:flex-row lg:items-stretch ">
        {/* left */}
        <div className="w-full lg:w-[46%] xl:1/2 bg-left flex flex-col items-end  ">
          {/* mobile nav start*/}
          <div className="flex items-center justify-end p-3 lg:hidden">
            <div
              className=" cursor-pointer"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {isNavOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </div>
          </div>

          {isNavOpen && (
            <div className="flex px-10 py-5 rounded-lg-lg flex-col items-center gap-5 lg:hidden rounded-lg bg-[#38bfc9] absolute z-10 w-full top-12 ">
              <span className="font-bold text-base text-white  hover:text-red-600">
                <Link to="">Our Partners</Link>
              </span>
              <span className="font-bold text-base text-white  hover:text-red-600">
                <Link to="">Become A Partner</Link>
              </span>
              <span className="font-bold text-base text-white  hover:text-red-600">
                <Link to="">Giveaway</Link>
              </span>
              <span className="font-bold text-base text-white  hover:text-red-600">
                <Link to="">Shop</Link>
              </span>
              <button className="font-bold text-base  px-3 py-2 text-[#d4d4d4] bg-black rounded-lg hover:text-white">
                Contact Us
              </button>
            </div>
          )}

          {/* mobile nav end*/}

          {/* for mobile */}
          <div className="p-3  flex flex-col items-center gap-8 lg:hidden  w-full " >
          <div className="flex items-center lg:justify-end justify-center ">
              <img src={WindlandText} alt="" className=" md:w-10/12 w-9/12" />
            </div>

            <div className=" flex flex-col items-center  gap-2 ">
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                With over 650+ businesses across 1000+ stores where 
              </p>
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                you can accessexclusive discounts Australia Wide from
              </p>
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                only $9.99 per month, opt-out anytime
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <button className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white">
                {" "}
                Sign Up for Free
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center h-full   2xl:max-w-[1200px]">
            <img src={Jip} alt="" className="lg:w-full md:w-10/12 w-9/12" />
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-[54%] xl:1/2 ">
          <div className="p-3 lg:p-5 flex flex-col gap-16   2xl:max-w-[1200px] ">
            {/* web-nav */}
            <nav className="lg:flex items-center justify-end gap-3 xl:gap-5 special:gap-8 hidden">
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-red-600">
                <Link to="">Our Partners</Link>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-red-600">
                <Link to="">Become A Partner</Link>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-red-600">
                <Link to="">Giveaway</Link>
              </span>
              <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-red-600">
                <Link to="">Shop</Link>
              </span>
              <button className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white">
                {" "}
                Contact Us
              </button>
            </nav>

            <div className="hidden lg:flex items-center lg:justify-end justify-center">
              <img src={WindlandText} alt="" className="lg:w-11/12 md:w-10/12 w-9/12" />
            </div>

            <div className="hidden lg:flex flex-col items-center lg:items-end gap-3 lg:gap-5 2xl:gap-6 special:gap-8">
              <p className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                With over 650+ businesses across 1000+ stores where
              </p>
              <p className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                you can accessexclusive discounts Australia Widefrom
              </p>
              <p className="text-base xl:text-lg 2xl:text-xl special:text-2xl font-semibold">
                only $9.99 per month, opt-out anytime
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center lg:justify-end">
              <button className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white">
                {" "}
                Sign Up for Free
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
