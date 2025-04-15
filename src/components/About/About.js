// src/components/About/About.js
import React from 'react';
import '../../assets/css/About.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDownload} from 'react-icons/fa';
import { BsStars } from "react-icons/bs"; 


import profileAboutPic from '../../assets/images/profile_pic.jpg';
import { motion } from 'framer-motion';



const About = React.forwardRef((props, ref) => {

const cvFileName = "files/CV_Otavio_Henrique.pdf"; //arquivo do CV

  return (
    <motion.section
      ref={ref}
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }} // Começa invisível e 50px abaixo
      whileInView={{ opacity: 1, y: 0 }} // Anima para visível na posição Y=0
      viewport={{ once: true, amount: 0.2 }} // Anima 1x quando 20% estiver visível
      transition={{ duration: 1 }} // Duração
    >
      
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="about-image-container">
           {/* ... imagem ... */}
           <img src={profileAboutPic} alt="Foto de Otávio Henrique" className="about-profile-pic"/>
        </div>
        <div className="about-text-container">
           
            
{/* ... parágrafos <p> ... */}
<p>
  Olá! Sou Otávio Henrique, um entusiasta de tecnologia recém-formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pela Universidade Veiga de Almeida, complementando formações técnicas em Informática e Programação. Minha paixão por resolver problemas e criar soluções me guiou naturalmente para o desenvolvimento de software.
</p>

<p>
  Agora, estou muito animado para dar o próximo passo e busco ativamente minha <strong>primeira oportunidade profissional</strong> como <strong>Desenvolvedor Web Júnior</strong>. Meu foco é <strong>aplicar meus conhecimentos</strong> e <strong>contribuir</strong> para a criação de soluções web <strong>eficientes</strong> e <strong>inovadoras</strong>.
</p>

<p>
  Durante minha formação e nos projetos aqui no portfólio, ganhei experiência prática com tecnologias front-end essenciais, incluindo <strong>HTML, CSS, JavaScript</strong> e, especialmente, <strong>React</strong> – a biblioteca que utilizei para construir esta própria página.
</p>

<p>
  Além do front-end, também desenvolvi projetos utilizando <strong>Java</strong> e possuo familiaridade com bancos de dados <strong>SQL</strong> e o essencial controle de versão com <strong>Git</strong>.
</p>

<p>
  Embora esteja no início da minha carreira profissional e buscando minha primeira experiência formal, sou <strong>dedicado</strong>, tenho grande facilidade para o <strong>aprendizado contínuo</strong> e estou constantemente buscando <strong>evoluir na prática</strong>.
</p>

<p>
  Fora do código, recarrego as energias assistindo animes, tocando violão ou com video games. Também valorizo a <strong>disciplina</strong> e o <strong>trabalho em equipe</strong>, que pratico em meu grupo de pedal e como Desbravador. Estou pronto e <strong>motivado</strong> para integrar uma equipe dinâmica, <strong>aprender</strong> com profissionais experientes e <strong>crescer</strong> junto com a empresa!
</p>

          <div className="cv-download-area"> {/* Div para ajudar no alinhamento/espaçamento */}
          <a
          // A construção do href continua a mesma
          href={`${process.env.PUBLIC_URL}/${cvFileName}`}
          download="CV_Otavio_Henrique.pdf"
          className="cv-download-button"
        >
          <FaDownload /> Baixar Currículo
        </a>
          </div>

          {/* Seção de skills */}
          <div className="skills-section">
            <h3>Habilidades Principais</h3>
            <div className="skills-icons-container">
              {/* Adicione um item para cada habilidade */}
              <div className="skill-item" title="HTML5">
                <FaHtml5 />
                <span>HTML5</span>
              </div>

              <div className="skill-item" title="CSS3">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>

              <div className="skill-item" title="JavaScript">
                <FaJsSquare />
                <span>JavaScript</span>
              </div>

              <div className="skill-item" title="React">
                <FaReact />
                <span>React</span>
              </div>

              <div className="skill-item" title="Node.js">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="skill-item" title="Git">
                 <FaGitAlt />
                 <span>Git</span>
              </div>

              <div className='skill-item' title='Assistência via Gemini AI'>
                <BsStars />
                <span>Assistência via Gemini AI</span>
            </div>
              
            </div>
          </div> {/* Fim .skills-section */}

        </div> {/* Fim .about-text-container */}
      </div> {/* Fim .about-content */}
      </motion.section>
    
  );
});

export default About;