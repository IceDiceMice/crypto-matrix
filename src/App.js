import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import React from "react";
import  Home from './pages/Home/Home';
import  Success from './pages/Success/Success';
import  YourData from "./pages/YourData/YourData";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/success'  element={<Success />}/>
          <Route path='/your-data'  element={<YourData />}/>
        </Routes>
      </Router>
  );
}

export default App;
