import "./WelcomeHome2.css";
import Apple from "../../assets/images/welcomehome/apple.png";
import Google from "../../assets/images/welcomehome/google.png";

const WelcomeHome2 = () => {
  return (
    <div className="w-full">
      {/* section 01 */}
      <div className="flex items-center justify-center bg-welcome">
        <div className="mx-auto 2xl:max-w-[2400px]   w-full px-3 lg:px-5 py-16">
          <div className="flex items-center justify-center 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-8 sm:gap-6 gap-5 lg:flex-row flex-col">
            <div className="flex flex-col justify-center items-center  ">
              <p className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl">
                200 <span className="text-white">+</span>
              </p>
              <p className="text-white text-center text-sm md:text-base 2xl:text-lg">
                Australian business partners
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl">
                350 <span className="text-white">'s</span>
              </p>
              <p className="text-white text-center text-sm md:text-base 2xl:text-lg">
                In savings through our mates rates <br /> discounts
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl">
                200 <span className="text-white">+</span>
              </p>
              <p className="text-white text-center text-sm md:text-base 2xl:text-lg">
                stores you can redeem offers In <br /> person or online
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center xl:gap-8 md:gap-5 gap-3 mt-10">
            <div className="flex justify-center items-center">
              <img src={Apple} alt="" className="cursor-pointer" />
            </div>
            <div className="flex justify-center items-center">
              <img src={Google} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* dection 02 */}
      <div className="flex items-center justify-center bg-welcome2" >
        <div className="mx-auto 2xl:max-w-[2400px]   w-full px-3 lg:px-5 py-16 bg-welcome2">
          <p className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]">
            {" "}
            WELCOME TO WINLADS
          </p>

          <p className="mt-5 sm:mt-6 lg:mt-8 text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
            Get ready to dive into an epic network of over 1,000 Aussie
            mate-approved stores! We've cherry-picked these spots to give you
            ripper discounts that'll make your wallet smile. Starting at just
            $9.99 a month, you'll be swimming in savings!
          </p>

          <p className="mt-5 sm:mt-6 lg:mt-8 text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
            Picture this: you're kicking back, chilling, and earning easy
            cash—yeah, it's possible! We've got a stash of unreal deals waiting
            for ya. Plus, sling our program to your mates, and you'll be raking
            in dosh on the side. No worries, it's that easy!
          </p>

          <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center justify-center">
            <button className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome2;
