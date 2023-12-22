import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import ArchitectureDesign from "./components/ArchitectureDesign";
import ArchitecturalPlanning from "./components/ArchitecturalPlanning";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
