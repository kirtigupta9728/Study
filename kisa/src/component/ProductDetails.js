import '../component/css/common.css'
import { Grid, Container, } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingCard from '../common/ShoppingCard'
import TopHeader from '../common/topHeader';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Rating } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

const ProductDetails = () => {
    const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const productSizeList = [38, 39, 40, 42, 44, 46]
    const [quantity, setQuantity] = useState(1);
    const [productSize, setProductSize] = useState(38);
    useEffect(() => {
    }, [])

    const getvalue = (e) => {
        setQuantity(e.target.textContent);
    }
    const getSizevalue = (e) => {
        setProductSize(e.target.textContent);
    }
    return (
        <div>
            <TopHeader />
            <div className='row margin'>
                <div className="col-md-1"></div>
                <div className=" col-md-4 topView ">
                    <Card sx={{ maxWidth: '98%', marginTop: '10px', bgcolor: '#fff', height: 650 }}>
                        <CardMedia
                            component="img"
                            image={'https://m.media-amazon.com/images/I/51yzoftb5oL._SY879_.jpg'}
                            alt={'title'}
                            sx={{
                                width: '100%',           // Adjust the width if needed
                                objectFit: 'contain',    // Ensure the image covers the area
                                height: '100%',
                                padding: 1,
                                //display: 'flex',         // Use flexbox for centering
                                justifyContent: 'flex-start', // Center horizontally
                                alignItems: 'center',
                                backgroundColor: 'white'    // Center vertically
                            }}
                        /></Card>
                </div>
                <div className="col-md-4  topView">
                    <a className="hiperlinkText" href="https://example.com" target="_blank" rel="noopener noreferrer">
                        Visit the Van Heusen Store
                    </a>
                    <h4 style={{ fontWeight: '600' }}>Van Heusen Men's Formal Shirt</h4>
                    <div className="row align-items-center">
                        <div className="col-md-12 d-flex align-items-center" style={{}}>
                            <span style={{ marginRight: '5px', fontSize: '1.2rem' }}>4</span> {/* Adjust font size and margin as needed */}
                            <Rating
                                name="simple-controlled"
                                value={3}
                                precision={0.5}
                                sx={{
                                    fontSize: '1rem', // Adjust the font size of the stars
                                    padding: 0,       // Remove any padding if necessary
                                }}
                            />
                            <div style={{ textAlign: 'center', }}>
                                <IconButton
                                    color="gery"
                                    aria-label="dropdown"
                                    sx={{ fontSize: '1rem' }} // Adjust icon size as needed
                                >
                                    <KeyboardArrowDownIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                            <a className="hiperlinkText" href="https://example.com" target="_blank" rel="noopener noreferrer">2,489 ratings</a>
                            <div className='verticalLine'></div>
                            <a className="hiperlinkText" href="https://example.com" target="_blank" rel="noopener noreferrer">Search this page </a>

                        </div>
                    </div>
                    <div className='horizentalLine'></div>
                    <div className="d-flex align-items-center">
                        <span className='fs-3 text-danger mt-3'>-48% &nbsp;</span><span className='fs-2 mt-3'>₹1,049</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <small className='ms-2'>M.R.P.: ₹1,999</small>
                    </div>

                    <div class="btn-group quantity">
                        <small className='me-2 bold' style={{ fontSize: 14, fontWeight: 'bold' }}>Quantity:</small>
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            {quantity}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {quantityList.map((item, index) =>
                                <li key={index.toString()} ><a class="dropdown-item" href="#" onClick={getvalue}>{item}</a></li>
                            )}
                        </ul>

                    </div>

                    <div class="btn-group quantity">
                        <small className='ms-5 me-2' style={{ fontSize: 14, fontWeight: 'bold' }}>Size:</small>
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            {productSize}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {productSizeList.map((item, index) =>
                                <li key={index.toString()} ><a class="dropdown-item" href="#" onClick={getSizevalue}>{item}</a></li>
                            )}
                        </ul>
                    </div>

                    <div className='marginTop-20'>
                        <small className='bold' style={{ fontSize: 14, fontWeight: 'bold' }}>Colour: <text style={{ fontWeight: 'normal' }}>Pale Purple</text></small>
                    </div>
                    <button className='btn color marginTop-10'>
                    </button>
                    <div className='marginTop-10'>
                        <small className='bold' style={{ fontSize: 14, fontWeight: 'bold', }}>Product Details</small>
                        <div>
                            <div className='row productDetails marginTop-10'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Material composition:</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>100% Cotton</div>
                            </div>
                            <div className='row productDetails'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Pattern:</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>Solid</div>
                            </div>
                            <div className='row productDetails'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Fit type:</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>Slim Fit</div>
                            </div>
                            <div className='row productDetails'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Sleeve type:</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>Long Sleeve</div>
                            </div>
                            <div className='row productDetails'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Collar style::</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>Classic collar</div>
                            </div>
                            <div className='row productDetails'>
                                <div className='col-md-5 bold' style={{ fontSize: 14, fontWeight: '600' }}>Country of Origin:</div>
                                <div className='col-md-3 bold' style={{ fontWeight: 'normal' }}>India</div>
                            </div>
                        </div>
                        <CardActions sx={{ marginTop:'5%',flexDirection:'column',alignItems:'flex-start'}}>
                            <Button  size="small" variant="contained" color="primary" sx={{ borderRadius: 10, fontSize: 10, fontWeight: 'bold',marginBottom:'5%' ,height:40,width:'50%'}} >
                                Add to cart
                            </Button>
                            <Button sx={{ borderRadius: 10, fontSize: 10, fontWeight: 'bold',marginBottom:'5%' ,height:40,width:'50%' }} size="small" variant="outlined" color="secondary">
                              Buy Now
                            </Button>
                        </CardActions>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default ProductDetails;
