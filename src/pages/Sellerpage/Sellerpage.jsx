
import styles from './Sellerpage.module.css';
import Top from '../../component/Bodysection/Top/Top.jsx';


const Sellerpage = () => {

  const [, setName] = useLocalStorage('PRODUCT_KEY', []);
 


  return (
    <div className={styles.container}> 
   <Top />

    </div>
  )
}


export default Sellerpage;