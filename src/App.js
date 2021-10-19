import React from 'react';
import './App.css';
import Header from './body/Header/Header';
import Content from './body/Content/Content';
import Footer from './body/Footer/Footer';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};


export default App;
