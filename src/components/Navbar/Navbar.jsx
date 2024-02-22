import React from "react";
import styles from "./navbar.module.css";
import { googlelogo } from "../images/image";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={googlelogo} alt="logo " className=" " />
      
      <span>Home</span>
      <span>About Us</span>
      <span>Store</span>
      <span>Search box</span>
      <span> Shopping Cart</span>
      <button>Sign Up</button>
    </div>
  );
};

export default Navbar;
