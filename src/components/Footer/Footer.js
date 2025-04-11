import React from 'react';
import '../../assets/css/Footer.css'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; //importa icones do react-icons


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='main-footer'>
            <p>
                &copy; {currentYear} Otávio Henrique. Todos os Direitos Reservados.
            </p>
        <div className='footer-links'>
            <p>
                <a 
                    href="https://github.com/ResoluteJax/portifolio-web"
                    target='_blank'
                    rel='noopener noreferrer' //Boa prática de segurança
                    className='footer-link'
                    >
                    <FaGithub className='footer-icon' />
                    Ver código-fonte no Github
                </a>
            </p>

            
        </div>
        </footer>
    );
};

export default Footer;
// Footer.js