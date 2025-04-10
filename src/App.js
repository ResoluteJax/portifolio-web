import React, {useRef} from 'react';
import Header from './components/Header/Header'; // Importa o componente Header
import './assets/css/App.css'; // Pode estar vazio ou ter estilos para o App geral


function App() {
// 1. Criar referências para as seções
const aboutRef = useRef(null);
const projectsRef = useRef(null);
const contactRef = useRef(null);
// Adicione mais refs se tiver outras seções (ex: footerRef)

// 2. Criar a função de scroll
const scrollToSection = (ref) => {
  // Verifica se a referência existe e tem um elemento associado
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth', // Faz a rolagem ser suave
      block: 'start',     // Alinha o topo da seção com o topo da viewport
    });
  } else {
    console.warn("Tentativa de scroll para ref não existente:", ref);
  }
};

  return (
    <div className="App">
    {/* 3. Passar a função e as refs como props para o Header */}
    <Header scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, contactRef }} />

    <main>
      {/* 5. Marcar as seções com as refs */}
      {/* Usaremos divs com altura e cores distintas para teste */}
      <div ref={aboutRef} id="about" style={{ height: '100vh', paddingTop: '80px', backgroundColor: 'lightblue' }}>
        <h2>Seção Sobre Mim (Placeholder)</h2>
      </div>
      <div ref={projectsRef} id="projects" style={{ height: '100vh', paddingTop: '80px', backgroundColor: 'lightgreen' }}>
        <h2>Seção Projetos (Placeholder)</h2>
      </div>
      <div ref={contactRef} id="contact" style={{ height: '100vh', paddingTop: '80px', backgroundColor: 'lightcoral' }}>
        <h2>Seção Contato (Placeholder)</h2>
      </div>
      {/* Futuramente, substitua essas divs pelos seus componentes reais */}
      {/* <div ref={aboutRef} id="about"><About /></div> */}
      {/* <div ref={projectsRef} id="projects"><Projects /></div> */}
      {/* <div ref={contactRef} id="contact"><Contact /></div> */}
    </main>

    {/* <Footer /> */}
  </div>
  );



}

export default App;