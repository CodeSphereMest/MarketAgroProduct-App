
import React from 'react';
import AboutUs from './pages/AboutUs';
// import Store from './pages/Store';
import LandingPage from './pages/landing';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign from './pages/Signup/sign';
import Login from './pages/Login/login';
import Navbar from './components/Navbar/Navbar';






function App() {

  const router = createBrowserRouter([
    { path: "/", element:   <LandingPage /> },
    {path:"/signup", element: <Sign/>},
    {path: "/login", element: <Login/>},
    {path: "/about-us", element: <AboutUs/>},
  ]);

  return (
    <>
  
  <Navbar />
   <RouterProvider router={router}/>
   
   </>
  );


}

export default App;