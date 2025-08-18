import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './Code.gif';
import marco from './Marco-Pica (1).png';
import './App.css';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import js from './js.png';
import java from './java.png';
import python from './pyhton.png';
import spring from './spring.png';
import node from './node.png';
import sql from './sql.png';
import github from './github.png';
import link from './link.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {

  const form = useRef();
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
   emailjs.sendForm(
  'service_zrpshv8',
  'template_246f8nb',
  form.current,
  'kXwi8L90UiJgpY-Gf'
)
    .then(() => {
      alert('✅ Mensaje enviado correctamente');
      form.current.reset();
    }, (error) => {
      alert('❌ Error al enviar: ' + error.text);
    });
  };

  return (
    <div className="App">
      {/* HEADER */}
    <header>
  <nav className="menu">
      <ul>
            <li>
              <a href="#"
                onClick={(e) => { e.preventDefault(); window.location.reload(); }}
              >
                Inicio
              </a>
            </li>
      <li><a href="#quien">¿Quién Soy?</a></li>
      <li><a href="#habi">Habilidades</a></li>
      <li><a href="#es">Estudio</a></li>
      <li><a href="#tec">Lenguajes y Tecnología</a></li>
      <li><a href="#sitios">Encuentrame En</a></li>
    </ul>
  </nav>
</header>
      <section className="App-header" data-aos="fade-up">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="typing">Hola, Soy Marco Antonio Rhenals Agresoth</h1>
        <h2 className="typing delay">
          Ingeniero de Sistemas, especialista en el Desarrollo De Front-End
        </h2>
      </section>

      {/* SECCIÓN QUIEN SOY */}
      <div className="Card" id="quien" data-aos="fade-right">
        <h3>¿Quién Soy?</h3>
        <h4>
          Soy un desarrollador Front-End, con experiencia en desarrollo front-end
(HTML, CSS, Bootstrap, Spring Boot) y visualización de datos con Power BI.
Destacado por el autoaprendizaje, el trabajo en equipo y la mejora continua,
con conocimientos en metodologías ágiles (Scrum, Kanban) e interés en UX,
calidad del software y buenas prácticas de desarrollo web.
        </h4>
        <a href="/HOJA DE VIDA - MARCO ANTONIO RHENALS AGRESOTH.pdf" download>
        <img src={marco} className="Marco-logo" alt="logo" />
        </a>
      </div>

      {/* HABILIDADES */}
      <div className="Card1" id= "habi" data-aos="fade-left">
        <h5>Habilidades</h5>
        <div className="skills-container">
          <div className="skill-card">Trabajo en equipo</div>
          <div className="skill-card">Resolución de problemas</div>
          <div className="skill-card">Diseño web responsivo</div>
        </div>
      </div>

      {/* Estudio */}
<div className="Card-Estudio" id="es" data-aos="fade-up">
  <div className="form-title1">Estudios</div>

  <div className="estu-card">
    <FontAwesomeIcon icon={faGraduationCap} className="icono-estudio" />
    Sistemas, Ingenieria de Sistemas -Tecnologico Comfenalco, Cartagena de Indeas <span className="fecha">2025-Presente</span>
  </div>

  <div className="estu-card">
    <FontAwesomeIcon icon={faGraduationCap} className="icono-estudio" />
    Sistemas, Tecnología en Desarrollo de Software -Tecnologico Comfenalco, Cartagena de Indeas <span className="fecha">2022-2024</span>
  </div>
</div>
      <div className="Card2" id="tec" data-aos="fade-right">
        <h6>Lenguajes y Tecnologías</h6>
        <div className="scroll">
          <img src={html} className="l" alt="HTML" />
          <img src={css} className="l" alt="CSS" />
          <img src={react} className="l" alt="React" />
          <img src={js} className="l" alt="JavaScript" />
          <img src={java} className="l" alt="Java" />
          <img src={python} className="l" alt="Python" />
          <img src={spring} className="l" alt="Spring" />
          <img src={node} className="l" alt="Node.js" />
          <img src={sql} className="l" alt="SQL" />
        </div>
      </div>

      {/* SITIOS */}
      <div className="Card3" id="sitios" data-aos="fade-left">
        <p>Puedes Encontrarme en</p>
        <div className="sitio-containercard">
          <a href="https://github.com/marco46777" rel="noopener noreferrer">
            <img src={github} className="sitio-card" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/marco-antonio-920227286/" rel="noopener noreferrer">
            <img src={link} className="sitio-card" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* FORMULARIO DE CONTACTO */}
      <div className="Card4">
        <div className="Card-Especial">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-title">Puedes Contactarme</div>

            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="user_email" placeholder="ejemplo@correo.com" required />

            <label htmlFor="mensaje">Motivo</label>
            <textarea id="mensaje" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>

            <button type="submit" id="enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
