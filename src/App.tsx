import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./homepage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Goal from "./pages/Goal";
import Customers from "./pages/Customers";
import Seo from "./pages/Seo";
import Smo from "./pages/Smo";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import ContentMarketing from "./pages/ContentMarketing";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/smo" element={<Smo />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
