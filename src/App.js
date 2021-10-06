import React from 'react';
import './App.css';
import Logo from './body/Header/img/Logo.png';
import mainPhoto from './body/Content/img/Photo.jpg'
import Header from './body/Header/Header';
import Content from './body/Content/Content';
import Footer from './body/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='appWrapper'>
      <Header />
      <Content state={props.state} />
      <Footer />
    </div>
    </BrowserRouter>
  );
};


export default App;
