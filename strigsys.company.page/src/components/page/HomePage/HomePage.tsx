//import { useState } from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";

function HomePage() {
  //const [count, setCount] = useState(0);
  return (
    <div className="home-container">
      <h1 className="home-heading">Bienvenido a Nuestra Empresa de Servicios Tecnológicos</h1>
      <p className="home-paragraph">
        Somos líderes en ofrecer soluciones tecnológicas de punta, ayudando a nuestros clientes a alcanzar el éxito a través de la innovación y la eficiencia.
      </p>

      <h2 className="home-subheading">Nuestros Servicios</h2>
      <ul className="home-list">
        <li>
          <strong>Consultoría Tecnológica:</strong> Asesoramiento experto para guiar tus decisiones tecnológicas.
        </li>
        <li>
          <strong>Servicios de Ingeniería de Software:</strong> Desarrollo de software a medida para satisfacer tus necesidades específicas.
        </li>
        <li>
          <strong>Diseño de Arquitectura de Software:</strong> Planificación y diseño de arquitecturas robustas y escalables.
        </li>
        <li>
          <strong>Servicios Especializados de Integraciones Aplicativas:</strong> Soluciones de integración para maximizar la interoperabilidad de tus sistemas.
        </li>
        <li>
          <strong>Diagnósticos de Rendimiento de Aplicaciones/Servicios:</strong> Evaluación y optimización del rendimiento para asegurar la eficiencia operativa.
        </li>
      </ul>

      <p className="home-paragraph">
        Para más información sobre cómo protegemos tu privacidad, consulta nuestra <Link to="/privacy-policy">Política de Privacidad</Link>.
      </p>
    </div>
  );
}

export default HomePage;
