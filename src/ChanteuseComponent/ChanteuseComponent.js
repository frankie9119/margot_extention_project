
import React from "react";
import './ChanteuseComponent.css';

import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer, MDBCardTitle, MDBCardText } from "mdbreact";
import InfiniteCarousel from 'react-leaf-carousel';

import coach1 from '../img/margot-1.jpg';
import coach2 from '../img/margot-2.jpg';
import margotCoachingImg from '../img/MargotCoaching.jpg';

import NavBar from '../NavBar/NavBar';
import PhotoGallery from './PhotoGallery';
import Footer from '../Footer/Footer';

import YouTube from 'react-youtube';

const ChanteuseComponent = () => {
return (
  <div className="ChanteuseComponent">
<NavBar/>
    	<div className="coaching">
    		<h1 className="margotSignature">Margot Soria</h1>
    		<h2 className="margotBelowSignature">Chanteuse</h2>
    	</div>
      <PhotoGallery/>
      <div className="coachVideo1">
    <YouTube className="video" videoId="5k95x0pAEhE"/>
      
  </div>
<MDBRow className="coachImgContainer">
    <MDBCol md="6"><YouTube className="video2" videoId="5k95x0pAEhE"/></MDBCol>

      <MDBCol md="6"><YouTube className="video2" videoId="5k95x0pAEhE"/></MDBCol>
  </MDBRow>
      {/*}
<MDBRow className="coachImgContainer">
    <MDBCol md="4"><img src={coach1} className="coachImg" alt="" /></MDBCol>
    <MDBCol md="4" className="">      
    <img src={coach2} className="coachImg" alt="" />
      </MDBCol>
      <MDBCol md="4"><img src={margotCoachingImg} className="coachImg" alt="" /></MDBCol>
  </MDBRow>
<div className="coachVideo1">
    <YouTube className="video" videoId="5k95x0pAEhE"/>
      
  </div>
<MDBRow className="coachImgContainer">
    <MDBCol md="6"><YouTube className="video2" videoId="5k95x0pAEhE"/></MDBCol>

      <MDBCol md="6"><YouTube className="video2" videoId="5k95x0pAEhE"/></MDBCol>
  </MDBRow>
*/}
 <Footer/>
    </div>
  )

};

export default ChanteuseComponent;