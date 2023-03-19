import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import './App.css';

const App = () => {

  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="do" element={<Footer />} />
    </Routes>
  )
}

export default App;