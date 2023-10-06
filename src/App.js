import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Food from "./Food";
const App = () => {
  return (
    <div className="App">
      <div>
      <Router>
      <Routes>
      
      <Route path="/food" element={<Food />} />
      <Route path="/" element={<Home />} />
      </Routes>
        </Router>
     
      </div>
     
    </div>
  );
}

export default App;
