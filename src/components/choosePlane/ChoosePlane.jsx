import "./chosePlane.css";
import Icon from "../../assets/images/chooseplane/Icons.png";
import Car from "../../assets/images/chooseplane/cjip.png";

const ChoosePlane = () => {
  return (
    <div className="w-full bg-chose-plan">
      <div className="flex flex-col items-center w-full px-3 lg:px-5 py-16 gap-10">
        <p className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase">
          {" "}
          Choose a Subscription plan
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex w-full 2xl:max-w-[2400px]  gap-3 lg:flex-row flex-col">
            {/* card1 */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#808080] text-white rounded-lg shadow h-fit">
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Starter Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                01 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$9.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Partner Store Discounts: 10% discount for 1 month upon
                    sign-up{" "}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$9.99 per month</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </div>

            {/* card2 */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#366B71] text-white rounded-lg shadow h-fit">
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Boomer Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                03 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$19.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 10% discount for 3
                    months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Discounts: 10% discount for 3 months</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button className="w-full hover:bg-white py-2 rounded-lg text-[#fff] hover:text-[#01819D] bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </div>

            {/* card3 */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#fff] text-[#01819D] rounded-lg shadow h-fit">
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Platinum Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                10 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$49.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Database Access</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$9.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 10% - 15% discount for
                    3 months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Partner Store Discounts: 10% - 15% discount for 6 months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button className="w-full hover:bg-[#808080] py-2 rounded-lg text-[#fff] hover:text-[#fff] bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full 2xl:max-w-[2400px]  gap-3 lg:flex-row flex-col">
            {/* car */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 flex items-center justify-center lg:order-1 order-1 my-border ">
              <img src={Car} alt=""  className="w-full lg:w-[120%]"/>
            </div>

            {/* card4 */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-gradient-to-r from-[#FFF401] to-[#CA9E03] text-black rounded-lg shadow h-fit lg:order-2 lg:mt-[-100px] xl:mt-[-130px] 2xl:mt-[-140px]">
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Gold Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                25 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$100 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Database Access</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 15% discount for 12
                    months
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Urgency Program</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </div>

            {/* card5 */}
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#1F1F1F] text-white rounded-lg shadow h-fit lg:order-3 ">
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Black Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                150 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$500 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Discounts rates ranging upto 20%</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    12 months access to premium merchant discounts upto 20%{" "}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Exclusive perks and privileges tailored for Black Tier
                    members
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Winlads OG member Eligibility after 6 months</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Urgency Program</p>
                </div>


                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads limited and Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlane;
