/*users.jsx*/
import React from "react";


import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer,MDBRow,MDBFooter, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import ConactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';


const ContactForm = () => {
  return (

  
<div className="ContactForm">
      <NavBar/>
        <ContactForm/>

      <Footer/>
    </div>
  );
};

export default ContactForm;