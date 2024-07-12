import { FaAmazon, FaMapMarkerAlt } from 'react-icons/fa'; // Import Amazon icon from react-icons
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton, Grid, Container,Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCard from '../common/ShoppingCard'
import { sendDeletetRequest, sendGetRequest, sendPostRequest } from '../services/services';
import APIConstants from '../services/APIConstants';
const Cart = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
      getData();
  }, [])

  const getData = async () => {
    const response = await sendGetRequest(APIConstants.getAddToCard);
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
  };

  const onDeleteItem=async(data)=>{
    const response = await sendDeletetRequest(APIConstants.deleteFromcart+data.product_id);
    console.log('response:::delete', response);
    if(response.status===200){
      console.log('added');
    }
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
      <br/><br/><br/>
      <div className='cartView'> 
      <Container>
        <Grid container spacing={4}>
          {productList?.map((item, index) =>
            <Grid item xs={12} sm={1} md={3}>
              <ShoppingCard
                image={item?.product_img}
                title={item?.product_name}
                description={item?.description}
                price={item?.price}
                item={item}
                actionType='Delete'
                onDelete={onDeleteItem}
              />
            </Grid>
          )}
        </Grid>
      </Container>
      </div>
    </div>
  );
}

export default Cart;
