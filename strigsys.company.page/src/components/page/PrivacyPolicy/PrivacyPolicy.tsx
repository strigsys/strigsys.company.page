//import { useState } from 'react'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  //const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 className="heading">Política de Privacidad</h1>
      <p className="paragraph">
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
      <p className="paragraph">
        Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, recuerda que ninguna transmisión de datos por Internet es completamente segura.
      </p>

      <h2 className="subheading">Cambios en Esta Política</h2>
      <p className="paragraph">
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos de cualquier cambio a través de nuestro sitio web.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
