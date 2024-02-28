import Hero from "../../components/Hero";
import PropsContainer from "../../components/products/PropsContainer";
import Navbar from "../../components/Navbar/Navbar"

const LandingPage = () => {
  return (
    <div>
       <Navbar/>
      <Hero />
      <PropsContainer />
    </div>
  );
};

export default LandingPage;
