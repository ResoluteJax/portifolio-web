import React, { useState } from 'react'; // Importa useState
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'; //  Importa ícones
import '../../assets/css/Header.css';
import  profilePic  from "../../assets/images/profile.jpg"; // Importa imagem de perfil


const Header = ({ scrollToSection, refs }) => {
  //  Adiciona estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para abrir/fechar o menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função auxiliar para lidar com o clique nos links
  const handleNavClick = (ref) => (event) => {
    event.preventDefault();
    scrollToSection(ref);
    //  Fecha o menu mobile ao clicar em um link
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  //Links das redes sociais no header
    const githubUrl = "https://github.com/ResoluteJax";
    const linkedinUrl = "https://www.linkedin.com/in/otavio-henrique-filgueiras-dos-santos-2746a120a/";

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={profilePic} alt="Otávio Henrique" className="profile-pic" />
        <div className="tittle-subtitle-container">
         <h1>Otávio Henrique</h1>
         <div className='subtitle-line'>
          <span>Desenvolvedor Jr. Fullstack</span>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />  
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />  
          </a>
         </div>
        </div>
      </div>
      
      {/*  Links de Navegação */}
      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#about" onClick={handleNavClick(refs.aboutRef)}>Sobre</a>
        <a href="#projects" onClick={handleNavClick(refs.projectsRef)}>Projetos</a>
        <a href="#contact" onClick={handleNavClick(refs.contactRef)}>Contato</a>
      </nav>

      {/*  Botão de Toggle do Menu Mobile */}
      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;