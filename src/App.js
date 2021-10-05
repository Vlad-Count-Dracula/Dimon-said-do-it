import React from 'react';
import './App.css';
import Logo from './body/Header/img/Logo.png';
import mainPhoto from './body/Content/img/Photo.jpg'
import Header from './body/Header/Header';
import Content from './body/Content/Content';
import SideBar from './body/SideBar/SideBar';
import Footer from './body/Footer/Footer';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
};


export default App;
