import axios from 'axios';
import { useState,useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Posts from './Posts/Posts';

const Hero = () => {

  return (
    <>
     
      <Banner/>      
       <Posts/>     
      <Footer/>
    </>
  );
};

export default Hero;