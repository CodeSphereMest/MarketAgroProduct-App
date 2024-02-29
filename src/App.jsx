import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./Pages/landing";

// import CatalogPage from './pages/CatalogPage'; 
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';
import Navbar from './components/Navbar';
// import SellersPage from './pages/SellersPage';
import ContactUs from "./components/contact-us/ContactUs";




function App() {
  return (

    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/catalog" element={<CatalogPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* <Route path="/sellers-page" element={<SellersPage />} /> */}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>



    </>

  );


}

export default App;


