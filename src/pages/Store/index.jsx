import React, { useState, useEffect } from 'react'
import { Card, Button, Form, FormControl } from 'bootstrap'


const Store = ({ onAddToCart}) => { 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeller, setFilterSeller] = useState('');

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('items')) || []);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!filterSeller || item.seller === filterSeller)
    );

  return (
    <div>
        <Form>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' onChange={e => setSearchTerm(e.target.value)}/>
          <FormControl type='text' placeholder='Seller' className='mr-sm-2' onChange={e => setFilterSeller(e.target.value)}/>
        </Form>
        <div>
          {filteredItems.map(item => (
            <Card>
              <Card.Img variant='top' src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: ${item.price} <br/>
                  Seller: {item.seller}
                </Card.Text>
                <Button variant='primary' onClick={() => onAddToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Store