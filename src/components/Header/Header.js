import React from 'react';
import '../../assets/css/Header.css';

// 4. Receber as props scrollToSection e refs
const Header = ({ scrollToSection, refs }) => {

  // Função auxiliar para lidar com o clique
  const handleNavClick = (ref) => (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link (navegação por hash)
    scrollToSection(ref);   // Chama a função de scroll passada por props
  };

  return (
    // Se quiser adicionar animação depois, envolva com motion.header
    <header className="main-header">
      <div className="logo-container">
        <h1>Seu Nome</h1>
      </div>
      <nav className="main-nav">
        {/* Atualizar os links para usar onClick */}
        <a href="#about" onClick={handleNavClick(refs.aboutRef)}>Sobre</a>
        <a href="#projects" onClick={handleNavClick(refs.projectsRef)}>Projetos</a>
        <a href="#contact" onClick={handleNavClick(refs.contactRef)}>Contato</a>
      </nav>
    </header>
  );
};

export default Header;