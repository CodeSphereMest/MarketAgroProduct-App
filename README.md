# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  for later:
  import React from "react";
  import styles from "./hero.module.css";

function Hero() {
return (
<section>
<section>
<div className={styles.bImage}>
<div className={styles.content}>
<h1>Welcome to Your Marketplace Name</h1>
<h2>Connecting Farmers to Fresh, Sustainable Harvests</h2>
<p>
Start Your Culinary Journey with Your Marketplace Name - Where
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
);
}

export default Hero;
