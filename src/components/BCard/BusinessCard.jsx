import { useState } from "react";
import BS1 from "../../assets/images/BusinessCard/BS-1.png";
import BS2 from "../../assets/images/BusinessCard/BS-2.png";
import share from "../../assets/images/BusinessCard/share.png";
import add from "../../assets/images/BusinessCard/add.jpeg";
import save from "../../assets/images/BusinessCard/save.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import userBUS from "../../assets/images/BusinessCard/userBUS.png";
import smartphoneBUS from "../../assets/images/BusinessCard/smartphoneBUS.png";
import basketballBUS from "../../assets/images/BusinessCard/basketballBUS.png";
import mailBUS from "../../assets/images/BusinessCard/mailBUS.png";
import orderNow from "../../assets/images/BusinessCard/OrderNow.png";
import "./modal.css";

function BusinessCard() {
  const [showForm, setShowForm] = useState(false);
  const [isOrderNow, setOrderNow] = useState(false);

  const handleShareClick = () => {
    setShowForm(!showForm);
    setOrderNow(!isOrderNow); // Toggle the state
  };

  return (
    <div>
      <div className="xl:mb-12 md:mb-20 mb-10 flex flex-col">
        <p className="text-xl font-bold xl:text-4xl md:text-4xl mb-4">
          Get My NFC
        </p>
        <p className="text-black">
          {isOrderNow ? "Let’s Get Your Card !!" : ""}
        </p>
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundcar})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 xl:mx-40">
          <img src={BS1} alt="" className="w-56 md:w-64" />
          <img src={BS2} alt="" className="w-56 md:w-64" />
          <div className="flex row flex-col">
            <div className="flex gap-3 mt-3">
              <div className="flex flex-col items-center  cursor-pointer hover:scale-105">
                <img
                  src={share}
                  alt=""
                  className="w-10 h-10 xl:w-12 xl:h-12 md:w-12 md:h-12"
                />
                <label className="text-sm"> Share</label>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:scale-105">
                <img
                  src={save}
                  alt=""
                  className="w-10 h-10 xl:w-12 xl:h-12 md:w-12 md:h-12"
                />
                <label className="text-sm">Save</label>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:scale-105">
                {isOrderNow ? (
                  // Display "orderNow" image when isOrderNow is true

                  <img
                    src={orderNow}
                    alt="Order Now"
                    className="w-10 h-10 xl:w-12 xl:h-12 md:w-12 md:h-12"
                    onClick={handleShareClick}
                  />
                ) : (
                  // Display "add" image when isOrderNow is false
                  <img
                    src={add}
                    alt="Add"
                    className="w-10 h-10 xl:w-12 xl:h-12 md:w-12 md:h-12"
                    onClick={handleShareClick}
                  />
                )}
                <label className="text-sm">
                  {isOrderNow ? "Order Now" : "Request"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && <ShareForm onClose={() => setShowForm(false)} />}
    </div>
  );
}

function ShareForm({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state

  return (
    <div className="fixed flex justify-center items-center custom-backdrop-blur  top-[40%] lg:top-[20%] left-[18%] sm:left-[22%] md:left-[30%] lg:left-[10%] xl:left-[15%] 2xl:left-[20%] ">
      <div className="rounded-2xl">
        {/* <form autoComplete="off"> */}
        <div className="form-contain-reg">
          <div className="bg-[#FFECA8] flex flex-row items-center py-2 px-4 rounded-2xl justify-between w-[280px] sm:w-[300px] md:w-[350px] ">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="bg-[#FFECA8] placeholder:text-black outline-none"
            />
            <img src={userBUS} alt="user" className="w-8 xl:w-10 lg:w-10 md:w-9" />
          </div>

          <div className="bg-[#FFECA8] flex flex-row items-center py-2 px-4 rounded-2xl justify-between w-[280px] sm:w-[300px] md:w-[350px] ">
            <input
              type="text"
              placeholder="Passport"
              id="passport"
              className="bg-[#FFECA8] placeholder:text-black outline-none"
            />
            <img
              src={basketballBUS}
              alt="passport"
              className="w-8 xl:w-10 lg:w-10 md:w-9"
            />
          </div>
          <div className="bg-[#FFECA8] flex flex-row items-center py-2 px-4 rounded-2xl justify-between w-[280px] sm:w-[300px] md:w-[350px] ">
            <input
              type="text"
              placeholder="Phone Number"
              id="mobile"
              className="bg-[#FFECA8] placeholder:text-black outline-none"
            />
            <img
              src={smartphoneBUS}
              alt="phone"
              className="w-8 xl:w-10 lg:w-10 md:w-9"
            />
          </div>
          <div className="bg-[#FFECA8] flex flex-row items-center py-2 px-4  rounded-2xl justify-between w-[280px] sm:w-[300px] md:w-[350px] ">
            <input
              type="text"
              placeholder="Postal Address"
              id="address"
              className="bg-[#FFECA8] placeholder:text-black outline-none"
            />
            <img src={mailBUS} alt="mail" className="w-8 xl:w-10 lg:w-10 md:w-9" />
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default BusinessCard;
