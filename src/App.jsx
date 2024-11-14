import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        </Routes>
      </Router>
  );
}

export default App;
