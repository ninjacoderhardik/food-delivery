import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Register from "../Register";
import About from "../components/about/About"
import Login from "../navbar/login/Login";
function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="about" element={<About/>}/> 
        <Route path="login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}
export default Router;
