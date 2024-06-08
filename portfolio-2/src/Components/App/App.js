import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homecomponent from "../../Pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homecomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
