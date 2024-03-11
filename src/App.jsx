import React from "react";
import Navbar from "./ui/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
