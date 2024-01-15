import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import ArchitectureDesign from "./components/ArchitectureDesign";
import ArchitecturalPlanning from "./components/ArchitecturalPlanning";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Construction from "./components/Construction";
import InteriorDesign from "./components/InteriorDesign";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/architecture-design" element={<ArchitectureDesign />} />
          <Route
            path="/architectural-planning"
            element={<ArchitecturalPlanning />}
          />
          <Route path="/construction" element={<Construction />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
