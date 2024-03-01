import React from "react";
import styles from "./hero.module.css";
function Hero() {
  return (
    <div>
      <section>
        <section>
          <div className={styles.bImage}>
            <div className={styles.content}>
              <h1>Welcome Mest CodeSphere MArket Hub</h1>
              <h2>Connecting Farmers to Fresh, Sustainable Harvests</h2>
              <p>
                Start Your Culinary Journey with MCS - Where
                Fresh Meets Fantastic!
              </p>
              <button>Order Now</button>
            </div>
          </div>
        </section>
        <section className={styles.feature}>
          <h1>FEATURED PRODUCTS</h1>
        </section>
      </section>
    </div>
  );
}

export default Hero;
