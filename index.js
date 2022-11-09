import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Service from './Components/Service';
import Form from './Components/Form';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Menu />
    <Service />
    <Form />
    <Footer />  
  </> 
);
