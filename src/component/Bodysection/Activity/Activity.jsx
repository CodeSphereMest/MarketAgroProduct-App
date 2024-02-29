import React, {useState} from 'react'
import styles from './Activity.module.css'
import { useLocalStorage } from 'usehooks-ts'

const Activity = ({closeActivity}) => {
  const [addproducts, setaddProducts] = useLocalStorage('PRODUCT_KEY', []);
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  function collectInfo (event) {
    setName(event.target.value)
    setPrice(event.target.value)
    setDescription(event.target.value)
  }

function addProductItem () {
  setaddProducts ([...addproducts, { name, price, description}]);

}

  return (
    <div onClick={(e) =>{
        if (e.target.className === 'container' ) closeActivity();
    }}>
    <div >
         <form className='container'>
          <div className={styles.card}>
            <table className={styles.table}>
                <tbody>
              <tr>
                <td>
                 <label htmlFor='image'>Choose image profile:</label>
                 <input type="file" id="image" name="image" accept="image/png, image/svg"  />  
                    </td>
              </tr>
              <tr>
                <td>
                <label htmlFor='pname'>Product Name</label><br />
                <input type="text" id="pname" name="pname" 
                value={name}
                onChange={collectInfo}
                placeholder="Enter your product name" /> 
                </td>
              </tr>
              <tr>
                <td>
                <label htmlFor='price'>Price</label><br />
                <input type="text" id="price" name="price" 
                value={price}
                 onChange={collectInfo}
                 placeholder="Enter your product price" />
                </td>
              </tr>
              <tr>
                <td>
                <label htmlFor='description'>Description</label><br />
                <textarea name='description' 
                value={description}
                onChange={collectInfo}
                placeholder="Enter your product description"/>
                </td>
              </tr>
              <tr>
                <td>
                    <span> 
                    <button>Delete</button>
                    <button>Edit</button><br />
                    <button 
                    onClick={addProducts}
                    >Submit</button>
                    </span>
                </td>
              </tr>
                    </tbody>
            </table> 
          </div>
            </form>
    </div>
    </div>
  )
}

export default Activity;