import React, { useEffect, useState } from "react";
import Blue from "../../assets/images/subscribers/blue.png";
import Green from "../../assets/images/subscribers/green.png";
import Yellow from "../../assets/images/subscribers/yellow.png";
import Red from "../../assets/images/subscribers/red.png";
import wallet from "../../assets/images/rafflesImages/wallet.png";
import savelotto from "../../assets/images/rafflesImages/savelotto.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import { ImCancelCircle } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import Visa from "../../assets/images/subcription/visa.png";
import BitCoin from "../../assets/images/subcription/bitcoin.png";
import Save from "../../assets/images/subcription/save.png";
import GreenCorrect from "../../assets/images/subcription/Icons.png";
import { FaStar } from "react-icons/fa";
import Cookies from "universal-cookie";

const PaymentModal = ({ handleClose, show }) => {
  return (
    <div className={show ? "block" : "hidden"}>
      <section className="modal-main">
        {/* Your payment method form or content goes here */}
        text
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

function SubscribeCard({
  isPopular,
  name,
  price,
  desc1,
  desc2,
  desc3,
  bgColor,
  gradientFrom,
  gradientTo,
  textColor,
  borderColor,
  buttonColor,
  buttonText,
  buttonHoverText,
  buttonHover,
  hoverButtonBorder,
  raffleCount,
  onButtonClick,
  cardBorderColor,
  subId,
  descList = [],
  mPlanId,
  qPlanId,
  yPlanId,
  planeId,
  year,
  quartly,
  month,
  color,
  colorFrom = "#0094FF",
  descL = [],
  id
}) {
  const cookies = new Cookies(null, { path: "/" });
  const handleChooseButton = () => {
    onButtonClick();
  };
  useEffect(()=>{
    const selectedPlaneId = cookies.get('selected-package-id')
    if(selectedPlaneId && selectedPlaneId ==id ){
      handleChooseButton()
      cookies.remove('selected-package-id')
    }
  },[])
  const [initialShow, setInitialShow] = useState(3);

  const handleShowMore = () => {
    if (initialShow == 3) {
      setInitialShow(descList[0].length);
    } else {
      setInitialShow(3);
    }
  };

  return (
    <div
      className={`bg-gradient-to-r relative ${gradientFrom} ${gradientTo} border-2 border-solid border-${cardBorderColor} text-${textColor} py-8 px-6 special:py-8 2xl:py-8 xl:pt-10 rounded-[10px] flex flex-col cursor-pointer`}
      style={{
        background: `linear-gradient(180deg, ${color} 0%, ${colorFrom} 100%)`,
      }}
    >
      {isPopular && (
        <div
          className="flex items-center justify-center gap-2 text-center absolute rounded-t-lg top-0 left-0 w-full py-2 bg-black font-semibold"
          style={{ color: "#fff" }}
        >
          <FaStar className="text-yellow-400" /> Most Popular
        </div>
      )}
      <p className="text-lg special:text-3xl 2xl:text-2xl text-center font-bold mb-6 mt-2">
        {name}&nbsp;Tier
      </p>

      <p className="font-bold text-center text-sm special:text-2xl 2xl:text-lg mb-3">
        <span className="text-4xl md:text-4xl"> {raffleCount}</span>{" "}
        <span className="uppercase text-xs">{subId}&nbsp;Accumulating {raffleCount == 1 ? "Entry" : "Entries"}</span>
      </p>
      <div
        className={`relative flex justify-center flex-col space-y-4 special:space-y-6 2xl:space-y-4 pb-16 bg-white text-black pt-2 px-2 rounded-xl h-full border-2 border-solid border-${cardBorderColor}`}
      >
        {descL.slice(0, initialShow).map((disc, key) => (
          <div
            key={key}
            className="flex flex-row space-x-2 special:gap-4 2xl:gap-4 items-center"
          >
            <img
              src={GreenCorrect}
              alt=""
              className="w-5 h-5 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
            />
            <p className="text-xs special:text-lg 2xl:text-md">{disc}</p>
          </div>
        ))}
        {/* <div className="flex flex-row gap-2 special:gap-4 2xl:gap-4 items-center">
          <img
            src={GreenCorrect}
            alt=""
            className="w-5 h-5 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className="text-xs special:text-lg 2xl:text-md">
            <span className="font-bold">{raffleCount}&nbsp;Accumulating</span>
            &nbsp;Entries
          </p>
        </div> */}
        {descL.length > 3 && (
          <button
            onClick={() => handleShowMore()}
            className="absolute bottom-1 right-1 text-xs font-semibold"
            style={{ color: color }}
          >
            {initialShow == 3 ? "View More" : "View Less"}
          </button>
        )}
      </div>

      <div className="">
        <button
          type="button"
          className={`bg-${buttonColor} text-${buttonText} ${
            !(
              (month && planeId === mPlanId) ||
              (quartly && planeId === qPlanId) ||
              (year && planeId === yPlanId)
            )
              ? `hover:text-${buttonHoverText} hover:bg-${buttonHover} hover:border-${hoverButtonBorder}`
              : ""
          } font-semibold uppercase w-full border-2 border-transparent rounded-xl text-black py-2 px-8 special:py-4 special:px-12 2xl:px-10 text-xs special:text-lg 2xl:text-sm mt-4 mb-2 ${
            (month && planeId === mPlanId) ||
            (quartly && planeId === qPlanId) ||
            (year && planeId === yPlanId)
              ? "cursor-not-allowed opacity-50" // Add styles for disabled state
              : ""
          }`}
          onClick={handleChooseButton}
          disabled={
            (month && planeId === mPlanId) ||
            (quartly && planeId === qPlanId) ||
            (year && planeId === yPlanId)
          }
        >
          <p className={``}>
            {(month && planeId === mPlanId) ||
            (quartly && planeId === qPlanId) ||
            (year && planeId === yPlanId)
              ? "selected"
              : "choose plan"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default SubscribeCard;
