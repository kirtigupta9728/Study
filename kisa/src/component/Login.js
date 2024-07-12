import { TextField,Button } from '@mui/material';
import { useState } from 'react';
import APIConstants from '../services/APIConstants';
import { sendPostRequest } from '../services/services';
import '../component/css/login.css'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../route/config';

const Login = () => {
   const [userName,setUserName]=useState("");
   const [password,setPassowrd]=useState("")
   const navigate = useNavigate();

   const onSubmit=async()=>{
    navigate(Routes.Dashboard);
    const body={
        username:userName,
        password:password
    }
    const response=await sendPostRequest(APIConstants.login,body);
    console.log('res:::',response);
   }
    return (
        <div className='mainContainer'>
            <div className="container shadow bg-light">
                <h3>Login</h3>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Username"
                    variant="filled"
                    size="small"
                    style={{margin:10,width:'50%'}}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Password"
                    variant="filled"
                    size="small"
                    style={{margin:10,width:'50%'}}
                    onChange={(text)=>setPassowrd(text.target.value)}
                />
                <Button onClick={onSubmit} variant="contained">Submit</Button>
            </div>

        </div>
    );
}

export default Login;
