import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.title}
            element={<route.element />}
          ></Route>
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
