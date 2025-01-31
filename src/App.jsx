import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import EliminarCuenta from './pages/EliminarCuenta';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
        </Routes>
      </Router>
  );
}

export default App;
