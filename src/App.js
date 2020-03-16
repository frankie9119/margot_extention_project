import React from 'react';
import logo from './img/margotHeadPhoto2.png';
import './App.css';
import NavBar from './NavBar/NavBar';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import CardsComponent from './CardsComponent/CardsComponent';
import margotImgCard1 from './CardsComponent/imgCardsComponent/margotCard1.jpg';
import margotImgCard2 from './CardsComponent/imgCardsComponent/margotCard2.jpg';
import Footer from './Footer/Footer';
import YouTubeComponent from './YouTubeComponent/YouTubeComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderComponent logo={logo}/>
      <CardsComponent margotImgCard1={margotImgCard1} margotImgCard2={margotImgCard2}/>
      <YouTubeComponent/>
      <Footer/>
      {/*<CardComponentTest margotImgCard1={margotImgCard1}/>
      <Footer/>*/}
    </div>
  );
}

export default App;

