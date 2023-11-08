import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

function CardComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the data
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product Cards</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.map(product => (
          <Card key={product.id} style={{ width: '300px', margin: '1rem' }}>
            <CardContent>
              <Typography>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100%' }} />
            </CardContent>
      
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
