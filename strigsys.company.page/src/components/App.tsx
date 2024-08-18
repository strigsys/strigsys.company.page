//import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy";
import HomePage from "./page/HomePage/HomePage";
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import Background from './common/Background/Background';



function App() {
  //const [count, setCount] = useState(0);

  // probablemente cuando se usa HashRouter, la variable de entorno VITE_BASE_URL no es necesaria
  // y se puede usar tal cual root '/'
  // const baseUrl = import.meta.env.VITE_BASE_URL || ''; // Obtén la variable de entorno
  const baseUrlForRoutes = ''; // Obtén la variable de entorno
  const baseUrlForAssets = import.meta.env.VITE_BASE_URL || ''; 

  return (
    <Router basename={baseUrlForRoutes} >
      <Background backgroundImage={`${baseUrlForAssets}/img/backgrounds/pexels-kevin-ku-92347-577585.jpg`}>
        <Routes>
          <Route
            path="*"
            element={
              window.location.pathname.startsWith('/img/') ? null : <HomePage />
            }
          />
          <Route path="/" element={
              <HomePage />
          } />
          <Route path="/privacy-policy" element={
              <PrivacyPolicy />
          } />
          {/* Agrega aquí otras rutas según sea necesario */}
        </Routes>
    </Background>
    </Router>


  );
}

export default App;
