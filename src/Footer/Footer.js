import React, { Component } from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
 <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0 footerColor">
      <div style={{ backgroundColor: "#CAA45D" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Follow me on social medias!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
                  <div className="social_footer">
                    <a className="external_links_footer" id="youtube" rel="youtube" href="https://www.youtube.com/channel/UCwXBMbJ9gtmZiyWtt1zpO0w" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a className="external_links_footer" id="instagram" rel="instagram" href="https://www.instagram.com/margotsoriart/" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a className="external_links_footer" id="facebook" rel="facebook" href="https://www.facebook.com/margot.soria.5" title="Facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a className="external_links_footer email" id="email" rel="email" title="email" data-email="" href="mailto:"><i class="far fa-envelope"></i></a>
                 </div> 
          {/*
              <a className="fb-ic ml-0">
                <i className="fab fa-youtube  mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-instagram mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-facebook mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="footerContent">
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <Link to="/" className="margotFooter"><h6 className="font-weight-bold margot">
              <strong>Margot Soria</strong>
            </h6></Link>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
Margot Soria propose des cours de chant, en partenariat avec le studio Wacked, niveaux débutant / intermédiaire, dans leurs studios d’enregistrements, à Châtelet les Halles.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>top Products check it out</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link className="linksClass" to="/CoachingComponent">Coaching</Link>
            </p>
            <p>
              <Link className="linksClass" to="/ChanteuseComponent">Chanteuse</Link>
            </p>
            <p>
              <Link className="linksClass" to="/ContactComponent">Contact</Link>
            </p>

          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>what They say about me</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>

          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Paris, FRANCE
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> margot@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright | <a href="https://www.francasadei.com"> FC Web Developer </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}


export default Footer;