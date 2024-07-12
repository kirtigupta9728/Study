import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography,Rating} from '@mui/material';
import '../component/css/common.css'
const ShoppingCard = ({ image, title, description, price, addItem, item,actionType,learnMore ,onDelete}) => {

  const onClickAdd = () => {
    addItem(item)
  }
  const onClickLearnMore=()=>{
    learnMore(item);
  }

  const onClickDelete=()=>{
    onDelete(item)
  }
  return (
    <Card sx={{ maxWidth: 250, margin: '20px auto', bgcolor: '#fff',height:'95%'}}>
  <CardMedia
    component="img"
    height="300"
    image={image}
    alt={title}
    sx={{
      width: '100%',           // Adjust the width if needed
      objectFit: 'contain',    // Ensure the image covers the area
      height: '200px',
      padding: 1,
      display: 'flex',         // Use flexbox for centering
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', 
      backgroundColor:'white'    // Center vertically
    }}
  />
  
  <CardContent sx={{textAlign:'center',height:170}}>
  <button className='btn color'>
  </button>
  <Typography gutterBottom variant="h1" component="div" sx={{fontSize:14,alignSelf:'center',fontWeight:'bold',marginTop:1,color:'black'}}>
     brand Name
    </Typography>
    <Typography gutterBottom variant="h1" component="div" sx={{fontSize:15,alignSelf:'center',fontWeight:'400',color:'black'}}>
      {title}
    </Typography>
        <Rating
          name="simple-controlled"
          value={3}
          defaultValue={2.5} precision={0.5}
          sx={{ fontSize: '1.2rem' }}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
    {/* <Typography variant="body5" color="text.secondary">
      {description}
    </Typography> */}
    <Typography sx={{color: '#ff5722',fontSize:18,fontWeight:'600'}}>
      ${price}
    </Typography>
  </CardContent>
  <CardActions sx={{justifyContent:'center',}}>
    <Button onClick={actionType=='Delete'?onClickDelete:onClickAdd} size="small" variant="contained" color="primary" sx={{ borderRadius: 10,fontSize:10,fontWeight:'bold' }} >
      {actionType=='Delete'?actionType:"Add to cart"}
    </Button>
    <Button onClick={onClickLearnMore} sx={{ borderRadius: 10,fontSize:10,fontWeight:'bold' }} size="small" variant="outlined" color="secondary">
      Learn More
    </Button>
  </CardActions>
 
</Card>

  );
}

export default ShoppingCard;
