import {  TextField, Box, MenuItem } from '@mui/material';
import DialogContainer from '../DialogContainer/index.jsx';
import { useEffect, useState } from 'react';
import React from 'react';


const categories = [
  {
    id: 1,
    value: 'Laptop',
  },
  {
    id: 2,
    value: 'Mobile',
  },
  {
    id: 3,
    value: 'PS5',
  },
  {
    id: 4,
    value: 'Air pod',
  },
];
export default function ({ product, show, onClose, width, reload }) {
  
  const [curProduct, setCurProduct] = useState({
    id: null,

  })

  useEffect(() => {
    setCurProduct(product);
  }, [product])

  const onInput = (e) => { 
    const newProduct = { ...curProduct };
    newProduct[e.target.name] = e.target.value;
    setCurProduct({ ...newProduct });
  }

  const onSave = async () => { 
    const method = curProduct.id ? 'PUT' : 'POST';
    const apiUrl = curProduct.id ? `https://px7ltm-8080.csb.app/products/${curProduct.id}` : 'https://px7ltm-8080.csb.app/products';

    const response = await fetch(`${apiUrl}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curProduct),
    })

    if (response.ok) {
      await reload();
      onClose();
    }
  }


  return (
    <>
      <DialogContainer
          show={show}
          onSave={onSave}
          onClose={onClose}
          width={width}
      >
      <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '97%' } }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                id="outlined-Name-input"
                label="Name"
                type="text"
                placeholder="Name"
                name='name'
                onInput={onInput}
                value={curProduct.name || ''}
              />
              <TextField
                id="outlined-category-input"
                label="Category"
                type="text"
                placeholder="category"
                name='categoryId'
                onInput={onInput}
                value={curProduct.categoryId || ''}
              />
            </div>
            {/* <TextField
              id="outlined-select-category"
              select
              label="Category"
              // defaultValue="Laptop"
              helperText="Please select your category"
            >
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField> */}
            <div>
              <TextField
                id="outlined-orderNum-input"
                label="Order Number"
                type="number"
                placeholder="OrderID"
                name='orderNum'
                onInput={onInput}
                value={curProduct.orderNum || ''}
              />
              <TextField
                id="outlined-Price-input"
                label="Price"
                type="number"
                placeholder="Price"
                name='price'
                onInput={onInput}
                value={curProduct.price || ''}
              />
            </div>
          </Box>
      </DialogContainer>
    </>
  )
}