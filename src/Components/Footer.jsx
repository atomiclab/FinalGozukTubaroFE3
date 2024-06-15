import React from 'react'
import { img } from '../Utils/constants';

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={img.logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
