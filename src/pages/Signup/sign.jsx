import React from "react";
import styles from "./sign.module.css";
import Navbar from "../../components/Navbar/Navbar";
// import { useNavigate } from "react-router-dom";


const Sign = () => {
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log('Order details:', orderDetails);
  //     // Process the checkout
  //     alert('Signup successful');
  //     navigate('/sellerspage')
  //   }
  // }
  return (
<>
<Navbar/>
    <div className={styles.container}>
      <div className={styles.buyer}>
      
       
        <form action="action_page.php" style={{ border: "2px solid #ccc",width:'120%',borderRadius:"15px", height:"355%"
         }}>
          <div style={{textDecorationColor:"white", textAlign:"justify"}}>
            
          <h2 >Are You a Buyer?</h2>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="fullname">
            <b>Full Name:</b>
          </label>
          <input
            className={styles.fname}
            type="text"
            placeholder="Enter Full name"
            name="fullname"
            required=""
          /><br/>

          <label htmlFor="contact">
            <b>Contact:</b>
          </label>
          <input
            className={styles.contact}
            type="text"
            placeholder="Enter Contact number"
            name="contact"
            required=""
          /><br/>

          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            className={styles.email}
            type="text"
            placeholder="Enter Email"
            name="email"
            required=""
          /><br/>

          <label htmlFor="psw">
            <b>Password:</b>
          </label>
          <input
            className={styles.pword}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          /><br/>
          <label htmlFor="psw-repeat">
            <b>Repeat Password:</b>
          </label>
          <input
            className={styles.pwordrepeat}
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required=""
          /><br/>
          <label>
            <input
              className={styles.remember}
              type="checkbox"
              defaultChecked="checked"
              name="remember"
              style={{ marginBottom: 15 }}
            />{" "}
            Remember me
          </label>
          <p>
            Already have an account?
            <button className={styles.login}>Login</button>
          </p>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a><br/><br/><br/>
            .
          </p>
          <div className={styles.button}>
            <button  type="button" className={styles.cancelbtn}>
              Cancel
            </button>
            <button type="submit" className={styles.signupbtn}>
              Sign Up
            </button>
            
          </div>
          </div>

        
        </form>
      </div>

      <div className={styles.box}>
        <form action="action_page.php" style={{ border: "2px solid #ccc", width:'120%', borderRadius:"15px"}}>
          <h2>Are You a Seller?</h2>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="fullname">
            <b>Full Name:</b>{" "}
          </label>
          <input
          // onSubmit={handleSubmit}
            className={styles.fname}
            type="text"
            placeholder="Enter Full name"
            name="fullname"
            required=""
          /><br/>

          <label htmlFor="businessname">
            <b>Name of Business:</b>{" "}
          </label>
          <input
            className={styles.business}
            type="text"
            placeholder="Enter business name"
            name="businessname"
            required=""
          /><br/>
          <label htmlFor="contact">
            <b>Contact:</b>
          </label>
          <input
            className={styles.contact}
            type="text"
            placeholder="Enter Contact number"
            name="contact"
            required=""
          /><br/>

          <label htmlFor="email">
            <b>Email:</b>{" "}
          </label>
          <input
            className={styles.email}
            type="text"
            placeholder="Enter Email"
            name="email"
            required=""
          /><br/>
          <label htmlFor="psw">
            <b>Password:</b>
          </label>
          <input
            className={styles.pword}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          /><br/>
          <label htmlFor="psw-repeat">
            <b>Repeat Password:</b>
          </label>
          <input
            className={styles.pwordrepeat}
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required=""
          /><br/>
          <label>
            <input
              className={styles.remember}
              type="checkbox"
              defaultChecked="checked"
              name="remember"
              style={{ marginBottom: 15 }}
            />{" "}
            Remember me
          </label>
          <p>
            Already have an account?
            <button className={styles.login}>Login</button>
          </p>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a>
            .
          </p>
          <div className={styles.button}>
            <button type="button" className={styles.cancelbtn}>
              Cancel
            </button>
            <button type="submit" className={styles.signupbtn}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Sign;
