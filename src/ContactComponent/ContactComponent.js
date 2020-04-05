
import React from "react";


import { Link } from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';



const ContactComponent = () => {
return (
  <div className="ContactComponent">
    <NavBar/>
        	<div className="coaching">
    		<h1 className="margotSignature">Margot Soria</h1>
    		<h2 className="margotBelowSignature">Contat</h2>
    	</div>
    <ContactForm/>
    <Footer/>
   </div>
  )

};

export default ContactComponent;