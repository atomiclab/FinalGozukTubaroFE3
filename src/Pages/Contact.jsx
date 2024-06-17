import React, { useContext } from 'react';
import Form from '../Components/Form';
import '../Styles/Contact.css';
import ThemeContext from '../Context/theme.context';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`contact-container ${theme}`}>
      <h2>¿Precisas más información?</h2>
      <p>¡Dejanos un mensaje y a la brevedad nos contactaremos!</p>
      
      <Form/>
    </div>
  );
}

export default Contact;
