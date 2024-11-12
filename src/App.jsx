import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TerminosCondiciones from './pages/TerminosCondiciones'; // Asegúrate de crear este componente

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        </Routes>
      </Router>
  );
}

export default App;
