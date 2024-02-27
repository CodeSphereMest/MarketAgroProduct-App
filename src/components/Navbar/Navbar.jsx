import React from "react";
import styles from "./navbar.module.css";
import { agrologo } from "../images/image";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <ul className={styles.unordered}>
          <li>
            <img width="80px" src={agrologo} alt="logo " className=" " />
            <h3 className={styles.msc}>MCS AgroHub</h3>
          </li>
          <li></li>
        </ul>
        {/* <p><b>MCS AgroHub</b></p>  */}

        <div className={styles.navbarPosition}>
          

          <span className={styles.home}>Home</span>
          <span className={styles.aboutUs}>About Us</span>
          <span className={styles.store}>Store</span>
          
          

          <input className={styles.searchbar} type="text" placeholder="Search item here..." />

          {/* <button type="submit">
            <i className={styles.submitbutton} />
          </button> */}
          

          {/* <form className={styles.searchbar} action="action_page.php">
            <input type="text" placeholder="Search item here" name="search" /> */}
          {/* </form> */}

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="15"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
              margin="15px"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </button>

          <span> </span>
          <button className={styles.button}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
