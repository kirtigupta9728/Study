import '../component/css/dashboard.css'
import { FaAmazon, FaMapMarkerAlt } from 'react-icons/fa'; // Import Amazon icon from react-icons
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton, Grid, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assest/home3.jpg'

import ShoppingCard from '../common/ShoppingCard'
import { sendGetRequest, sendPostRequest } from '../services/services';
import APIConstants from '../services/APIConstants';
import TopHeader from '../common/topHeader';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../route/config';
const Dashboard = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

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

  const onAdditem = async (data) => {
    console.log(data, 'data');
    const body = {
      userId: data?._id,
      product_name:data?.product_name,
      product_img:data?.product_img,
      product:data?.product,
      product_id: '1'
    }
    const response = await sendPostRequest(APIConstants.addToCard, body);
    console.log('response', response);
    if(response.status===200){
      console.log('added')
    }

  }

  const onLearnMore=async(data)=>{
    navigate(Routes.productDetails);
  }
  return (
    <div>
      <TopHeader />
      <div className="imagediv">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <Container>
        <Grid container spacing={2}>
          {productList.map((item, index) =>
            <Grid item xs={12} sm={2} md={3}>
              <ShoppingCard
                image={item?.product_img}
                title={item?.product_name}
                description={item?.description}
                price={item?.price}
                addItem={onAdditem}
                item={item}
                learnMore={onLearnMore}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
