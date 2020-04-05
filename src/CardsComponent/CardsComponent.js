import React, { Component } from 'react';
import './CardsComponent.css';

import { Link } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

import Zoom from 'react-reveal/Zoom';


const CardsComponent = (props) => {
    return (

        <div>
    <MDBRow className="cardsComponent">
    
    
      <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={props.margotImgCard1}
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Le Coaching</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Bien commencer</p>

            <MDBCardText>
              
            La posture est un élément essentiel à la bonne maîtrise du chant :
            Ayant obtenu mon diplôme de danseuse contemporaine (DEC), je me suis formée dans l’anatomie fonctionnelle. quelques points importants : le centre, la respiration, les appuis et la tenue.
       
            </MDBCardText>
            <MDBBtn color='unique'><Link to="/CoachingComponent">Read More</Link></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={props.margotImgCard2}
              alt='food'
            />
          </MDBView>

          <MDBCardBody>

<MDBCardTitle className='card-title'>
              <strong>Chanteuse</strong>
            </MDBCardTitle>

            <MDBCardText>
              Chanteuse lead pour les concerts promo de The Wickeed (Universal Music), chanteuse soliste et choriste dans la chorale Sankofa Unit (qui a joué avec Hélène Ségara, Shym, ShakaPonk, Laurent Voulzi, Michel Fugain, Tal, les Gipsy Kings, Chimène badi), membre du CRD de Bobigny en chant Jazz (DEM), Margot Soria coache depuis 2016 des artistes de tout horizon, avec la volonté qui lui est propre: rigueur, justesse, pédagogie, écoute et bonne humeur. 
            </MDBCardText>

            <MDBBtn color='unique'><Link to="/ChanteuseComponent">Read More</Link></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={props.margotImgCard2}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Pour qui ?</strong>
            </MDBCardTitle>
<Zoom>
            <p className='font-weight-bold blue-text'>Wev developer</p>
</Zoom>
            <MDBCardText>
              Mes cours sont pour ceux qui souhaitent découvrir le chant ou un nouvel univers artistique, acquérir la confiance nécessaire pour se produire en public, améliorer leur technique vocale, mais aussi préparer un enregistrement studio.
          Cours à la carte, allant de la session ponctuelle au cours hebdomadaire. Margot est également spécialisée dans les musiques actuelles, Pop et Jazz, et vous accompagnera au piano, selon votre choix et vos exigences.
            </MDBCardText>

 <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>

    )
}

export default CardsComponent;





{
    /*
    const CardsComponent= (props) => {


      return(

    <div className="test">
    <div className="container">
        <div className="col-auto card-column column-0">
          <div className="card card-color-0">
            <div className=""></div>
            <img src={props.margotImgCard1} />
            <h1>Le Coaching</h1>
            <p className="pCards">Bien commencer
                La posture est un élément essentiel à la bonne maîtrise du chant :
                Ayant obtenu mon diplôme de danseuse contemporaine (DEC), je me suis formée dans l’anatomie fonctionnelle. quelques points importants : le centre, la respiration, les appuis et la tenue.</p>
            <button className="btn-1"><Link to="/CoachingComponent"><span>Call to Action</span></Link> </button>     
          </div>
        </div>

        <div className="col-auto card-column column-1">
          <div className="card card-color-1">
            <div className="border"></div>
            <img src={props.margotImgCard2} />
            <h1>Chanteuse</h1>
            <p className="pCards">Chanteuse lead pour les concerts promo de The Wickeed (Universal Music), chanteuse soliste et choriste dans la chorale Sankofa Unit (qui a joué avec Hélène Ségara, Shym, ShakaPonk, Laurent Voulzi, Michel Fugain, Tal, les Gipsy Kings, Chimène badi), membre du CRD de Bobigny en chant Jazz (DEM), Margot Soria coache depuis 2016 des artistes de tout horizon, avec la volonté qui lui est propre: rigueur, justesse, pédagogie, écoute et bonne humeur. </p>
            <button className="btn-1"><Link to="/ChanteuseComponent"><span>Call to Action</span></Link></button>
          </div>
        </div>

        <div className="col-auto card-column column-2">
          <div className="card card-color-2">
            <div className="border"></div>
            <img src={props.margotImgCard2} />
            <h1>Pour qui ?</h1>
            <p className="pCards">Mes cours sont pour ceux qui souhaitent découvrir le chant ou un nouvel univers artistique, acquérir la confiance nécessaire pour se produire en public, améliorer leur technique vocale, mais aussi préparer un enregistrement studio.
              Cours à la carte, allant de la session ponctuelle au cours hebdomadaire. Margot est également spécialisée dans les musiques actuelles, Pop et Jazz, et vous accompagnera au piano, selon votre choix et vos exigences.</p>
            <button className="btn-1"><span>Call to Action</span></button>
          </div>
        </div>

    </div>

    </div>





        )
    };


    export default CardsComponent;


    */
}