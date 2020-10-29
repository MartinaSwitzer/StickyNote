import React from 'react';
import './Footer.css';

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>copyright &copy; {year}</p>
        </footer>
    )
}
export default Footer;
