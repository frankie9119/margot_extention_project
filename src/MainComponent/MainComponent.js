import React from "react";

import { Link } from "react-router-dom"

import margotHeadImage from '../HeaderComponent/imgHeaderComponent/margotHeadPhoto2_web.png';

import NavBar from '../NavBar/NavBar';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import CardsComponent from '../CardsComponent/CardsComponent';
import margotImgCard1 from '../CardsComponent/imgCardsComponent/margotCard1.jpg';
import margotImgCard2 from '../CardsComponent/imgCardsComponent/margotCard2.jpg';
import Footer from '../Footer/Footer';
import YouTubeComponent from '../YouTubeComponent/YouTubeComponent';

import Fade from 'react-reveal/Fade';

//Functional Component 
const MainComponent = () => {
  return (
    <div className="App">
      <NavBar />
      <HeaderComponent margotHeadImage={margotHeadImage} />
      <CardsComponent margotImgCard1={margotImgCard1} margotImgCard2={margotImgCard2} />
      <YouTubeComponent />
      <Footer />





    </div>
  );
};

export default MainComponent;