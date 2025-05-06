import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import InvestorRelations from './pages/InvestorRelations';
import PropertyPortfolio from './pages/PropertyPortfolio';
import GetInTouch from './pages/GetInTouch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="font-display">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/property-portfolio" element={<PropertyPortfolio />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
