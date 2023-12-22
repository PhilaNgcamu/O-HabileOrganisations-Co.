import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling
import Home from "./components/Home";
import Services from "./components/Services";
import ArchitectureDesign from "./components/ArchitectureDesign";
import ArchitecturalPlanning from "./components/ArchitecturalPlanning";
import Team from "./components/Team";
import Contact from "./components/Contact";

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
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
