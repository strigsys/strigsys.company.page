//import { useState } from 'react'
import './PrivacyPolicy.css';
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  //const [count, setCount] = useState(0);
  return (
    <div className="container max-w-[800px] block bg-gray-800 bg-opacity-90 text-white p-4 rounded-lg h-dvh w-full">
      <h1 className="heading">Política de Privacidad</h1>
      <p className="paragraph w-auto inline-block">
        Tu privacidad es importante para nosotros. Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información.
      </p>

      <h2 className="subheading">Información que Recopilamos</h2>
      <ul className="list">
        <li>Información personal que nos proporcionas directamente.</li>
        <li>Datos recopilados automáticamente cuando usas nuestro servicio.</li>
      </ul>

      <h2 className="subheading">Cómo Usamos la Información</h2>
      <ul className="list">
        <li>Para mejorar nuestros servicios y productos.</li>
        <li>Para comunicarnos contigo.</li>
      </ul>

      <h2 className="subheading">Protección de Datos</h2>
      <p className="paragraph w-auto inline-block">
        Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, recuerda que ninguna transmisión de datos por Internet es completamente segura.
      </p>

      <h2 className="subheading">Cambios en Esta Política</h2>
      <p className="paragraph w-auto inline-block">
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos de cualquier cambio a través de nuestro sitio web.
      </p>

      <p className="home-paragraph w-auto inline-block">
        Regresar a &nbsp;
        <Link to="/">
          <b className="text-sky-500">
            Inicio
          </b>
        </Link>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
