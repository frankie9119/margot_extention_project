import React, { Component } from 'react';
import './CardsComponent.css';



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
        <button className="btn-1"><span>Call to Action</span></button>      
      </div>
    </div>

    <div className="col-auto card-column column-1">
      <div className="card card-color-1">
        <div className="border"></div>
        <img src={props.margotImgCard2} />
        <h1>Chanteuse</h1>
        <p className="pCards">Chanteuse lead pour les concerts promo de The Wickeed (Universal Music), chanteuse soliste et choriste dans la chorale Sankofa Unit (qui a joué avec Hélène Ségara, Shym, ShakaPonk, Laurent Voulzi, Michel Fugain, Tal, les Gipsy Kings, Chimène badi), membre du CRD de Bobigny en chant Jazz (DEM), Margot Soria coache depuis 2016 des artistes de tout horizon, avec la volonté qui lui est propre: rigueur, justesse, pédagogie, écoute et bonne humeur. </p>
        <button className="btn-1"><span>Call to Action</span></button>
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