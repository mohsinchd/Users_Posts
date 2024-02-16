import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";

import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <Router>
      <div className="container py-5">
        <Navbar />
        <Routes>
          {routes.map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
