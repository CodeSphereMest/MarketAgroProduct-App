import React, { useState } from "react";
import styles from "./Top.module.css";
import Activity from "../Activity/Activity";

const Top = (props) => {
   
    const [activityOpen, setActivityOpen] = useState(false)

    
    const columns = [
      {Name: 'apple', Price:'20', Description:'This is nice'}
    ]



  return (

    <div>
      <div className={styles.topsection}>
        <div className={styles.headersection}>
          <div className={styles.title}>
            <h1>Welcome to MCS Agro Hub</h1>
            <p>Hello Seller, Welcome back!</p>
          </div>
          <div className={styles.sproduct}>
            <h2>My Products</h2>
            <button className={styles.upload} onClick={() => setActivityOpen(true)}>Upload a product</button>
          </div>

<div>
  <table>
  <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
    </tr>
  </tbody>
  </table>
</div>

<div>
    {activityOpen && <Activity closeActivity={() => {
        setActivityOpen(false);
    }} columns={columns}/>}
    </div>
         
        </div>
      </div>
    </div>
  );
};

export default Top;
