import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Component/Card/Card";
import Task from "./Component/Task/Task";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
