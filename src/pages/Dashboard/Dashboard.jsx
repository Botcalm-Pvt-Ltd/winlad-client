import SideNav from "../../components/SideNav/SideNav";
import "./Dashboard.css";
import HiddenCar from "../../assets/images/hiddenCar.png";
import MainCar from "../../assets/images/MainCar.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { motion } from "framer-motion";
import { carAnimation } from "../../animation/animation";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import SmallGoldCard from "../../components/GoldCard/SmallGoldCard";
import SearchField from "../../components/SearchField/SearchField";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import BG from "../../assets/images/HomesideBg.png";
import MyEntriesButton from "../../components/MyEntries/MyEntriesButton";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [giveaways, setGiveaways] = useState([]);
  const [raffleCount, setRaffleCount] = useState([]);
  const [selectGiveawayId, setSelectGiveawayId] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [color, setColor] = useState("");

  const [selectPayment, setSelectPayment] = useState(false);
  const [buyRaffle, setBuyRaffle] = useState(false);

  useEffect(() => {
    currentUserValidation();
    getRaffleCount();
  }, [raffleCount]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getGiveaways();
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/raffleRoundsFuture?uid=${
          valUser.uid
        }`
      )
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setGiveaways(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getRaffleCount = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getUserRafflesCount?uid=${
          valUser.uid
        }`
      )
      .then((response) => {
        console.log(response.data, "countData");
        setRaffleCount(response?.data);
        setLoading(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setIsLoading(false);
      });
  };

  const handleButton = (giveawayId) => {
    console.log("Clicked on button for giveaway with raffleId:", giveawayId);
    setSelectGiveawayId(giveawayId);
    raffleCount.data.available ? setBuyRaffle(true) : setSelectPayment(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative mx-auto">
          <SideNav screen="full" name={valUser.name} userId={valUser.uid} />

          {/* home-content */}
          <div className="flex flex-col xl:flex-col flex-1 px-1 gap-5">
            {/* left side */}
            <div className="flex flex-col flex-1 ">
              <div className="block xl:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={carAnimation.initialMobile}
                      animate={carAnimation.animate}
                      transition={carAnimation.transition}
                      className="w-4/5"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
                <div className="left-4 top-20 space-y-4">
                  <div className="flex flex-col space-y-2">
                    <p className="text-[#22CCEE] text-2xl font-semibold">
                      Earning Balance
                    </p>
                    <p className="text-4xl text-black">${valUser.balance}</p>
                  </div>
                  <SmallGoldCard />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Next Giveaways</p>
                  {loading ? (
                    <div className="flex flex-row justify-center gap-2 items-center">
                      <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                        Loading Subscriptions
                      </p>
                      <FiLoader className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24 animate-spin" />
                    </div>
                  ) : giveaways.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                      {giveaways.map((giveaway, key) => (
                        <DashboardVehicleCard
                          key={key}
                          name={giveaway.raffle?.name}
                          date={giveaway?.startingtime}
                          fromColor={giveaway.raffle?.color}
                          color={giveaway?.raffle?.color}
                          icon={giveaway.raffle?.image}
                          onButton={() => {
                            handleButton(giveaway._id);
                          }}
                          bgColor={giveaway.raffle?.color}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      <MdOutlineDoNotDisturbOff className="w-8 h-8 2xl:w-12 2xl:h-12 special:w-16 special:h-16" />
                      <p className="font-bold text-xl 2xl:text-3xl special:text-4xl">
                        No More Giveaways
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden xl:flex flex-col space-y-4 items-end">
                <div className="bg-black rounded-b-3xl space-y-4 relative w-web">
                  <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="col-span-1">
                      <SearchField />
                    </div>
                    <div className="col-span-1">
                      <TopNav textColor={"white"} />
                    </div>
                  </div>
                  <div className="absolute left-4 top-20 space-y-8">
                    <div className="flex flex-col space-y-2">
                      <p className="text-[#22CCEE] text-2xl font-semibold">
                        Earning Balance
                      </p>
                      <p className="text-4xl text-white">${valUser.balance}</p>
                    </div>
                    <SmallGoldCard />
                  </div>
                  <div className="flex flex-row items-center gap-10 bottom-0">
                    <img
                      src={HiddenCar}
                      alt="hidden-car"
                      className="w-84 h-48"
                    />
                    <motion.img
                      initial={carAnimation.initial}
                      animate={carAnimation.animate}
                      transition={carAnimation.transition}
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 w-full xl:w-web pt-12">
                  <p className="text-3xl 2xl:text-4xl special:text-6xl font-semibold">
                    Next Giveaways
                  </p>
                  {loading ? (
                    <div className="flex justify-center">
                      <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
                    </div>
                  ) : giveaways.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                      {giveaways.map((giveaway, key) => (
                        <DashboardVehicleCard
                          key={key}
                          name={giveaway.raffle?.name}
                          date={giveaway?.endtime}
                          color={giveaway?.raffle?.color}
                          fromColor={giveaway.raffle?.color}
                          icon={giveaway.raffle?.image}
                          onButton={() => {
                            handleButton(giveaway._id);
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2 pt-12">
                      <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
                      <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                        No More Giveaways
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* right-side */}
            <div className="flex flex-col flex-1">
              <img
                src={BG}
                alt=""
                className="absolute right-0 -z-10 md:top-80 top-20 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-20 opacity-60 2xl:top-40 xl:top-40"
              />
              <div className="graph-section "></div>
            </div>
          </div>
          <MyEntriesButton/>
        </div>
      )}
      {selectPayment && (
        <SelectRafflePaymentMethod
          onClose={() => setSelectPayment(false)}
          userId={valUser.uid}
          giveawayId={selectGiveawayId}
        />
      )}

      {/* {buyRaffle && (
        <BuyRaffle
          onClose={() => setBuyRaffle(false)}
          userId={valUser.uid}
          giveawayId={selectGiveawayId}
          subId={valUser.sub_id}
          quotation={raffleCount.data.rafflecount}
          count={raffleCount.data.rafflecountused}
        />
      )} */}
    </>
  );
};

export default Dashboard;
