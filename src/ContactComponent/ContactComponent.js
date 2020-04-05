
import React from "react";


import { Link } from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';



const ContactComponent = () => {
return (
  <div className="ContactComponent">
    <NavBar/>
    <ContactForm/>
    <Footer/>
   </div>
  )

};

export default ContactComponent;