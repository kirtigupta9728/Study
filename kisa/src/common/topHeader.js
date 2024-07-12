import '../component/css/dashboard.css'
import { FaAmazon, FaMapMarkerAlt } from 'react-icons/fa'; // Import Amazon icon from react-icons
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton, Grid, Container,Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assest/home3.jpg'

import ShoppingCard from '../common/ShoppingCard'
import { sendGetRequest, sendPostRequest } from '../services/services';
import APIConstants from '../services/APIConstants';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../route/config';
const TopHeader = () => {
  const navigate = useNavigate();
 
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await sendGetRequest(APIConstants.product);
    console.log('response', response.data);
    if (response.status === 200) {
      setProductList(response?.data);
    }
  }

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Implement your search logic here
  };
  const handleCartClick = () => {
    // Handle cart click event
    console.log('Cart clicked!');
    navigate(Routes.cart);
  };
  const onAdditem = async (data) => {
    console.log(data, 'data');
    const body = {
      userId: '6',
      product_name: 'xyz',
      product_img: 'https://m.media-amazon.com/images/I/81UHvZLQ5vL._AC_SY400_.jpg',
      product: 'flower',
      product_id: '1'
    }
    const response = await sendPostRequest(APIConstants.addToCard, body);
    console.log('response', response)
  }
  return (
    <div>
      <div className="row tile">
        <div className='col-md-1 text'>
          <FaAmazon style={{ fontSize: '48px', color: '#FF9900' }} />
        </div>
        <div className='col-md-2 location'>
          <FaMapMarkerAlt style={{ fontSize: '13px', color: '#FF9900' }} />
          <div className='column '>
            <div className='text'>Deliver to Kirti</div>
            <div className='text'><span className='styled-span'>Noida...201306</span></div>
          </div>
        </div>
        <div className='col-md-6'>
          <TextField
            variant="outlined"
            size="small"  // Use "medium" or "small" instead of "large"
            value={query}
            sx={{
              width: '100%', // Adjust width as needed
              backgroundColor: 'white', // Background color
              '& fieldset': {
                borderColor: 'black', // Border color
              },
              '& input': {
                backgroundColor: 'white', // Input background color (if different)
              },

            }}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className='col-md-1 text'>Kirti</div>
        <div className='col-md-1 text'>Retrun <br /><span className='styled-span'> & Orders</span></div>
        <div className='col-md-1 text'>
          <IconButton aria-label="cart" onClick={handleCartClick} style={{ color: '#fff' }}>
            <ShoppingCartIcon />
            <Typography variant="body1" sx={{ marginLeft: '8px', fontSize: 12 }}>Cart</Typography>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
