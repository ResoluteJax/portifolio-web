import React, {useRef} from 'react';
import Header from './components/Header/Header'; // Importa o componente Header
import Footer from './components/Footer/Footer'; // Importa o componente Footer
import Projects from './components/Projects/Projects'; // Importa o componente Projects
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './assets/css/App.css';
import "react-image-gallery/styles/css/image-gallery.css";



function App() {
  const aboutRef = useRef(null); // Ref já deve existir
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    // ... (código da função scrollToSection) ...
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    } else {
        console.warn("Tentativa de scroll para ref não existente:", ref);
    }
  };

  // Ajuste o valor de scroll-margin-top para a altura do seu header
  const scrollMarginTopValue = '75px'; // Exemplo Desktop
  const scrollMarginTopValueMobile = '65px'; // Exemplo Mobile

  return (
    <div className="App">
    {/*  Passar a função e as refs como props para o Header */}
    <Header scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, contactRef }} />

    <main>
      {/*  Marcar as seções com as refs */}
            
      {/* Componente About */}
      <About ref={aboutRef} />

      {/* Componente Project */}
      <Projects ref={projectsRef} />

      {/* Componente Contact */}
      <Contact ref={contactRef} />
      

    </main>
    <Footer /> {/* Adiciona o Footer */}
  </div>
  );
}

export default App;