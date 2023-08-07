import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  
} from "./routes/Routes.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import request from "./utils/request";
const App = () => {
  useEffect(() => {
    try {
     const res= request.get(`/user/getuser`,{withCredentials:true})
      toast.success(res.data.message);
    } catch (error) {
      // console.log(error.response.data.message)
      // toast.error(error.res.data.message);
      
    }
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        
      </Routes>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      
    </BrowserRouter>
  );
};

export default App;