import React, { useState } from 'react'; // 1. Importa useState
import { FaBars, FaTimes } from 'react-icons/fa'; // 2. Importa ícones
import '../../assets/css/Header.css';

const Header = ({ scrollToSection, refs }) => {
  // 3. Adiciona estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para abrir/fechar o menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função auxiliar para lidar com o clique nos links
  const handleNavClick = (ref) => (event) => {
    event.preventDefault();
    scrollToSection(ref);
    // 6. Fecha o menu mobile ao clicar em um link
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="main-header">
      <div className="logo-container">
        <h1>Otávio Henrique</h1>
      </div>

      {/* 5. Adiciona classe condicional ao nav */}
      {/* Removemos a classe 'main-nav' daqui se quisermos que ela só se aplique no desktop */}
      {/* ou a mantemos e sobrescrevemos no mobile */}
      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#about" onClick={handleNavClick(refs.aboutRef)}>Sobre</a>
        <a href="#projects" onClick={handleNavClick(refs.projectsRef)}>Projetos</a>
        <a href="#contact" onClick={handleNavClick(refs.contactRef)}>Contato</a>
      </nav>

      {/* 4. Botão de Toggle do Menu Mobile */}
      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;