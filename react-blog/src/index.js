import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from 'react-router-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './store'
// import Home from './components/Home/Home';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import PrivateRoutes from './components/PrivateRoutes';
// import DetailsView from './components/Details/DetailsView';
// import AddPost from './components/AddPost/AddPost';
// import EditPost from './components/EditPost/EditPost';

// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<App />}>
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/profile' element={<ProfilePage />} />
//         <Route path='/forget' element={<ForgotPasswordForm />} />
//         <Route path='/reset' element={<ResetPasswordForm />} />
//         <Route path='/verify' element={<VerifyEmail />} />
//         {/* <Route path='' element={<PrivateRoutes />} >
//           <Route index={true} path='/' element={<Home />} />
//           <Route path='/add' element={<AddPost />} />
//           <Route path='/edit/:id' element={<EditPost />} />
//           <Route path='/details/:id' element={<DetailsView />} />
//         </Route> */}
//       </Route>
//     )
//   );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
  <App />
    
 
);


