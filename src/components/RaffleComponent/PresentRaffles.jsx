import React from "react";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import max from "../../assets/images/rafflesImages/max.png";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";

const PresentRaffles = ({ setShowPopup }) => {
  // Common raffleid for all arrays
  const commonRaffleId = "6543e08c2076f209adae93a2";
  // Array 1
  const raffleArray1 = [
    {
      _id: "6559a4a32717a7a23e7b353c",
      name: "Raffle Round 1",
      date: "2023-SEP-19 TUESDAY",
      raffleid: commonRaffleId,
      desc: "Official Landrover Round 1",
    },
    {
      _id: "6559a4c22717a7a23e7b353d",
      name: "Raffle Round 2",
      date: "2023-SEP-19 TUESDAY",
      raffleid: commonRaffleId,
      desc: "Official Landrover Round 2",
    },
    {
      _id: "6559a4c22717a7a23e7b353d",
      name: "Raffle Round 2",
      date: "2023-SEP-19 TUESDAY",
      raffleid: commonRaffleId,
      desc: "Official Landrover Round 2",
    },
    {
      _id: "6559a4c22717a7a23e7b353d",
      name: "Raffle Round 2",
      date: "2023-SEP-19 TUESDAY",
      raffleid: commonRaffleId,
      desc: "Official Landrover Round 2",
    },
    
  ];
  return (
    <>
      {raffleArray1.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 special:gap-4">
          {raffleArray1.map((round, key) => (
            <div
              key={key}
              className="w-full flex cursor-pointer flex-col rounded-3xl px-2 py-2 special:px-4 2xl:px-4 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 animate-slide-in-right"
              style={{
                background:
                  "linear-gradient(98.92deg, #F59E0B 45%, #000000 83%)",
              }}
              onClick={() => setShowPopup(true)}
            >
              <div className="flex flex-row justify-between items-center">
                <img
                  src={Jeep}
                  alt=""
                  className="flex w-36 special:w-96 2xl:w-64"
                />
                <div className="flex flex-col space-y-4 z-10">
                  <p className="text-white text-center font-bold xl:text-xs text-xs special:text-2xl 2xl:text-md">
                    {round.name}
                  </p>
                  <p className="text-[10px] text-center text-white special:text-xl 2xl:text-xs">
                    {round.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 items-center">
                <div className="w-11/12 overflow-clip whitespace-nowrap flex gap-2 z-10">
                  <p className="text-white">{round.desc}</p>
                </div>

                <div className="">
                  <GoQuestion />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
          <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
            No More Giveaways
          </p>
        </div>
      )}
    </>
  );
};

export default PresentRaffles;
