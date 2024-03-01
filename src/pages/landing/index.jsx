import Hero from "../../components/hero/Hero";
import PropsContainer from "../../components/products/PropsContainer";
import Navbar from "../../components/navbar/Navbar"
import ContactUs from "../../components/contact-us/ContactUs";
import AboutUs from "../../components/AboutUs/AboutUs";



const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropsContainer />
      <ContactUs />
      <AboutUs />
     
    </div>
  );
};

export default LandingPage;
