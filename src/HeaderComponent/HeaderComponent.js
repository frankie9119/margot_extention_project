import React, { Component } from 'react';
import './HeaderComponent.css';


const HeaderComponent= (props) => {
  return(

    <div className="App-header">
      <div className="headerComponent">
        <div className="titles">
          <p className="margotSignature">
            Margot Soria
          </p>
          <p className="margotBelowSignature">
            Chanteuse et Coach Vocale
          </p>
          </div>
          <div className="margotHeadImg">
          <img src={props.logo} className="App-logo" alt="logo" />
          </div>
        </div>


             <div className="social">
                    <a className="external_links" id="youtube" rel="youtube" href="https://www.youtube.com/channel/UCwXBMbJ9gtmZiyWtt1zpO0w" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a className="external_links" id="instagram" rel="instagram" href="https://www.instagram.com/margotsoriart/" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a className="external_links" id="facebook" rel="facebook" href="https://www.facebook.com/margot.soria.5" title="Facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a className="external_links email" id="email" rel="email" title="email" data-email="" href="mailto:"><i class="far fa-envelope"></i></a>
                 </div>       
      </div>





    )
};


export default HeaderComponent;