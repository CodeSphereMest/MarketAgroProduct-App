import React from 'react';
import Productprops from './Productprops';
import apple from '../../assets/images/pImages/apple.jpg'
import broccoli from '../../assets/images/pImages/broccoli.jpg'
import carrot from '../../assets/images/pImages/carrot.jpg'
import tomato from '../../assets/images/pImages/tomato.jpg'
import styles from './Productprops.module.css'

function PropsContainer() {
  return (
    <div className={styles.container}>
        <Productprops image={apple} heading="Apple" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium obcaecati voluptatem incidunt ducimus at similique unde provident! Voluptas unde ab hic ipsa labore expedita voluptates ipsam necessitatibus possimus sequi" />
        <Productprops image={broccoli} heading="Broccoli" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium obcaecati voluptatem incidunt ducimus at similique unde provident! Voluptas unde ab hic ipsa labore expedita voluptates ipsam necessitatibus possimus sequi" />
        <Productprops image={carrot} heading="Carrot" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium obcaecati voluptatem incidunt ducimus at similique unde provident! Voluptas unde ab hic ipsa labore expedita voluptates ipsam necessitatibus possimus sequi" />
        <Productprops image={tomato} heading="Tomato" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium obcaecati voluptatem incidunt ducimus at similique unde provident! Voluptas unde ab hic ipsa labore expedita voluptates ipsam necessitatibus possimus sequi" />
    </div>
  )
}

export default PropsContainer