import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
// import './components/FooterComponents/FooterContainer';

const App = () => {
  return (
    <div className="app-container">
    <HeaderContainer/>
    <CardContainer/>
    </div>
  );
};

export default App;
