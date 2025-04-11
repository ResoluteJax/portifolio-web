import React from 'react'; 
import '../../assets/css/Projects.css';
import ImageGallery from 'react-image-gallery';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

//importação das imagens dos projetos
import proj1_img1 from '../../assets/images/projeto1/proj1_img1.png';
import proj1_img2 from '../../assets/images/projeto1/proj1_img2.png';
import proj1_img3 from '../../assets/images/projeto1/proj1_img3.png';

import proj2_img1 from '../../assets/images/projeto2/proj2_img1.png';
import proj2_img2 from '../../assets/images/projeto2/proj2_img2.jpg';

import proj3_img1 from '../../assets/images/projeto3/proj3_img1.png';
import proj3_img2 from '../../assets/images/projeto3/proj3_img2.png';
import proj3_img3 from '../../assets/images/projeto3/proj3_img3.png';
import proj3_img4 from '../../assets/images/projeto3/proj3_img4.png';
import proj3_img5 from '../../assets/images/projeto3/proj3_img5.png';
import proj3_img6 from '../../assets/images/projeto3/proj3_img6.png';
// -- Estrutura de Dados dos Projetos -- \\
const projectsData =[
    {
        id: 1,
        title: 'FlowTask: Gerenciador de Tarefas Interativo',
        description: ' FlowTask um app de Lista de Tarefas (To-Do List) 📝! Adicione ➕, marque como concluído ✔️ e remova 🗑️ suas tarefas diárias de forma simples e rápida. Construído com React ⚛️ para organizar seu fluxo de trabalho! 🚀',
        technologies: ['REACT(com Hooks)', 'CSS', 'JavaScript', 'HTML'],
        images: [
            {original: proj1_img1,
            thumbnail: proj1_img1,
            description:'Tela Principal Versão Mobile'},
            
            {original: proj1_img2,
            thumbnail: proj1_img2,
            description:'Tela Principal Versão Desktop'},

            {original: proj1_img3,
            thumbnail: proj1_img3,
            }
        ],
        demoUrl: 'https://resolutejax.github.io/flowtask-app/',
        repoUrl: 'https://github.com/ResoluteJax/flowtask-app'
    },
    {
        id: 2,
        title: 'Leitor de Planilha Excel com Pyhton',
        description: 'Esta aplicação permite carregar arquivos Excel 📄, processá-los ⚙️ e exibir os resultados em uma interface web 🌐. É um projeto com fins educacionais 🎓, focado em explorar as propriedades das bibliotecas Flask 🐍 e Pandas 🐼 do Python.',
        technologies: ["HTML", "Python"],
        images: [
            {original: proj2_img1, 
            thumbnail: proj2_img1,
            description:'Tela de Upload de arquivo Xlsx'},

            {original: proj2_img2, 
            thumbnail: proj2_img2,
            description:'Tela Principal com as células tratadas'}

               
        ],
        demoUrl: null,
        repoUrl: 'https://github.com/ResoluteJax/Leitor-de-Planilha'
    },
    {
        id: 3,
        title: 'Sistema Para Controle de Ordem de Serviços',
        description: '💻 Um programa que faz o controle de ordem de serviços 🛠️ com banco de dados 📂 + tela de login 🔑 em JAVA ☕.',
        technologies: ["JAVA", "MYSQL"],
        images: [
            {original: proj3_img1, 
                thumbnail: proj3_img1,
                description:'Tela de "CRUD" de OS'},

            {original: proj3_img2, 
                thumbnail: proj3_img2
                },

            {original: proj3_img3, 
                thumbnail: proj3_img3,
                description:'Tela Sobre(aba "Ajuda")'},

            {original: proj3_img4, 
                thumbnail: proj3_img4,
                description:'Tela de Login'},

            {original: proj3_img5, 
                thumbnail: proj3_img5,
                description:'Tela "CRUD" de Clientes'},

            {original: proj3_img6, 
                thumbnail: proj3_img6,
                description:'Usúario Admin Logado'}
               
        ],
        demoUrl: null,
        repoUrl: 'https://github.com/ResoluteJax/Gerenciamento-de-OS-com-JAVA'
    },

];
// -- Fim Estrutura de Dados dos Projetos -- \\

// Usa React.forwardRef para receber a ref
const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="projects-section">
      <h2>Meus Projetos</h2>
      
      <p className="projects-subtitle">
        Confira todos os projetos e também projetos futuros em meu{' '}
        <a
          href='https://github.com/ResoluteJax'
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link" // Classe para estilizar o link
        >
          GitHub <FaGithub /> {/* Ícone dentro do link */}
        </a>
        .
      </p>

      <div className="projects-container">
        {/* Mapeia os dados dos projetos para renderizar cada card */}
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>


            {/* 2. Substitui o placeholder pela galeria */}
            <div className="gallery-container"> {/* Container opcional para estilização extra */}
              <ImageGallery
                items={project.images} // 3. Passa as imagens do projeto atual
                // 4. Configurações opcionais recomendadas:
                showThumbnails={project.images.length > 1} // Mostra thumbs se tiver mais de 1 imagem
                showFullscreenButton={true} // Botão de tela cheia
                showPlayButton={false} // Esconde botão de play (slideshow automático)
                showNav={project.images.length > 1} // Mostra setas de navegação se tiver mais de 1 imagem
                lazyLoad={true} // Carrega imagens sob demanda (melhor performance)
                additionalClass="project-gallery-custom" // Classe CSS para estilização personalizada (opcional)
              />
            </div>



            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Tecnologias:</strong> {project.technologies.join(', ')}
            </p>


           {/* 2. Substituir placeholder pelos links reais */}
           <div className="project-links">
              {/* Link para Demo (só aparece se demoUrl existir) */}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button demo-button"
                >
                  <FaExternalLinkAlt /> Conferir Demo
                </a>
              )}
              {/* Link para Repositório (só aparece se repoUrl existir) */}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button repo-button"
                >
                  <FaGithub /> Código Fonte
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;