import "./Home.css";
// import Footer from "../../components/Footer/footer";

import Showcase from "../../components/showcase/Showcase";

import Thirdpage from "../../components/thirdpage/Thirdpage";
import Fourthpage from "../../components/fourthpage/Fourthpage";
import Fifthpage from "../../components/fifthpage/Fifthpage";
import Footer from "../../components/footerSection/Footer";
import ChechSecondPage from "../../components/secondpage/ChechSecondPage";
import Welcomehome from "../../components/Welcomehome/Welcomehome";
import Gallery from "../../components/Gallery/Gallery";
import Showcase2 from "../../components/showcase/Showcase2";
import WelcomeHome2 from "../../components/Welcomehome/WelcomeHome2";
import Service from "../../components/Service/Service";
import Youtube from "../../components/youtube/Youtube";
import Benifit from "../../components/benifit/Benifit";
import Gallery2 from "../../components/Gallery/Gallery2";
import ChoosePlane from "../../components/choosePlane/ChoosePlane";


const Home = () => {
  return (
    <div>
      {/* <Showcase /> */}
      <Showcase2/>
      {/* <Welcomehome/> */}
      <WelcomeHome2/>
      {/* <ChechSecondPage/> */}
      <Service/>
      {/* <Thirdpage /> */}
      <Youtube/>
      {/* <Fourthpage /> */}

      <Benifit/>

      <Gallery2/>
      
      {/* <Gallery/> */}

      <ChoosePlane/>

      {/* <Fifthpage /> */}
      <Footer />
    </div>
  );
};

export default Home;
