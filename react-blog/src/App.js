import { useState,useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Header from './components/Header'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Register from './screens/Register'
import Login from './screens/Login'
import ProfilePage from './screens/ProfilePage'
import ForgotPasswordForm from './screens/ForgotPasswordForm'
import ResetPasswordForm from './screens/ResetPasswordForm'
import VerifyEmail from './screens/VerifyEmail'


function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);
  
  // console.log(user)
  return (
    <>
      {/* <Header /> */}
      <ToastContainer />
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/forget' element={<ForgotPasswordForm />} />
          <Route path='/reset' element={<ResetPasswordForm />} />
          <Route path='/verify' element={<VerifyEmail />} />
        </Routes></BrowserRouter>
    </>
  );
}

export default App;
