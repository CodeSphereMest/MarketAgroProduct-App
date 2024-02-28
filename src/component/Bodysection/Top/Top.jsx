import React from 'react'
import styles from './Top.module.css'
import sellerimage from '../../../assets/Images/sellerimage.jpg';

const Top = () => {
  return (
    <div>
        <div className={styles.topsection}>
            <div className={styles.headersection}>
                <div className={styles.title}>
                    <h1>Welcome to MCS Agro Hub</h1>
                    <p>Hello Seller, Welcome back!</p>
                </div>


                <div className={styles.cardsection}>
                    <div className={styles.rightcard}>
                        <h1>Create and sell extraordinary products</h1>
                        <p>The world's fast growing industry today are natural made products!</p>
                    </div>
                     <div className={styles.simage}>
                        <img src={sellerimage} width='400px'
                        height='100px'/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top