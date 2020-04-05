
import React from "react";
import './CoachingComponent.css';

import margotCoachingImg from '../img/MargotCoaching.jpg';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const CoachingComponent = () => {
    return (
        <div className="CoachingComponent">
      <NavBar/>
      <div className="coaching">
        <h1 className="margotSignature">Margot Soria</h1>
        <h2 className="margotBelowSignature">Le Coaching</h2>
      </div>



        <MDBRow className="coachingContent">
    <MDBCol><img src={margotCoachingImg} className="margotCoachingImg" alt="margotCoachingImg" /></MDBCol>
    <MDBCol className="">      
    <p className="coachingDescription">
    Margot Soria propose des cours de chant, en partenariat avec le studio Wacked, niveaux débutant / intermédiaire, dans leurs studios d’enregistrements, à Châtelet les Halles.

Chanteuse lead pour les concerts promo de The Wickeed (Universal Music), chanteuse soliste et choriste dans la chorale Sankofa Unit (qui a joué avec Hélène Ségara, Shym, ShakaPonk, Laurent Voulzi, Michel Fugain, Tal, les Gipsy Kings, Chimène badi), membre du CRD de Bobigny en chant Jazz (DEM), Margot Soria coache depuis 2016 des artistes de tout horizon, avec la volonté qui lui est propre: rigueur, justesse, pédagogie, écoute et bonne humeur. 

Margot est également spécialisée dans les musiques actuelles, Pop et Jazz, et vous accompagnera au piano, selon votre choix et vos exigences.
      </p>
      </MDBCol>
  </MDBRow>
      


    <MDBRow className="coachingCards">
      <MDBCol md='4'>
        <MDBCard wide cascade>


          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>LeBien commencer</strong>
            </MDBCardTitle>

            <MDBCardText>
              
            La posture est un élément essentiel à la bonne maîtrise du chant :
Ayant obtenu mon diplôme de danseuse contemporaine (DEC), je me suis formée dans l’anatomie fonctionnelle. quelques points importants : le centre, la respiration, les appuis et la tenue.
        
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard narrow>
          

          <MDBCardBody>

<MDBCardTitle className='card-title'>
              <strong>Déroulé du cours</strong>
            </MDBCardTitle>

            <MDBCardText>
            Travail sur la respiration, ouverture des résonateurs et circulation de lair. Technique et échauffements vocaux. 

interprétation du morceau choisi par l’élève. Travail sur la rythmique, la justesse, les nuances et l’arrangement. 
Tous mes cours sont accompagnés soit au piano soit à la guitare.
               </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard>
          

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Pour qui ?</strong>
            </MDBCardTitle>

            <MDBCardText>
              Mes cours sont pour ceux qui souhaitent découvrir le chant ou un nouvel univers artistique, acquérir la confiance nécessaire pour se produire en public, améliorer leur technique vocale, mais aussi préparer un enregistrement studio.

Cours à la carte, allant de la session ponctuelle au cours hebdomadaire.
</MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>


<div className="priceTable">
<p className="pTarifs">Tarifs</p>
    <MDBTable >
      <MDBTableHead>
        <tr>

          <th>EUR par heure</th>
          <th>Déscription</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>

          <td>40</td>
          <td>Coaching Vocal</td>

        </tr>
        <tr>

          <td>45</td>
          <td>Coaching session Stidio</td>

        </tr>

      </MDBTableBody>
    </MDBTable>
</div>



      <Footer/>
    </div>
    );
};

export default CoachingComponent;