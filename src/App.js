import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Project";
import About from "./routes/About";
import Skills from "./routes/Skills";
 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />        
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
