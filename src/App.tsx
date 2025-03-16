import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './App.css';
import Services from './Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;