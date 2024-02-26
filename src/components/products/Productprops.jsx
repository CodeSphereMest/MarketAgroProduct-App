import React from 'react'
import styles from './Productprops.module.css'


function Productprops(props) {
  return (
    <div className={styles.card}>
        <img src={props.image} alt="" className={styles.img} />
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
        <button>Learn More</button>

    </div>
  )
}

export default Productprops