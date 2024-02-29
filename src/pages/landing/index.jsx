import Hero from "../../components/hero/Hero";
import PropsContainer from "../../components/products/PropsContainer";
import Navbar from "../../components/Navbar/Navbar"
import ContactUs from "../../components/contact-us/ContactUs";



const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropsContainer />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
