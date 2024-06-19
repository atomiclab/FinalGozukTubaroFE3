import React from 'react';
import Form from '../Components/Form';
import '../Styles/Contact.css';
import { useTheme } from '../Context/global.context';

const Contact = () => {
  const { themeState } = useTheme(); 
  
  return (
    <div className={`contact-container ${themeState.darkMode ? 'dark' : 'light'}`}>
      <h2>¿Precisas más información?</h2>
      <p>¡Dejanos un mensaje y a la brevedad nos contactaremos!</p>
      
      <Form/>
    </div>
  );
}

export default Contact;
