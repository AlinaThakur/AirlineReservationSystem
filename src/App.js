import "./App.css";
import Home from "./form/Home";
import Flight from "./form/Flight";
import AirlineReservationSystem from "./form/AirlineReservationSystem";
import { Routes, Route } from "react-router-dom";
import NavBar from "./form/NavBar";
import About from "./form/About";
import Appy from "./form/src/Appy";
import React from "react";
import Logout from "./form/Logout";
import ErrorLog from "./ErrorLog";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/home" exact element={<Home />} />
        <Route path="/user" exact element={<Appy />} />
       <Route path="/flight" exact element={<Flight />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/login" exact element={<AirlineReservationSystem />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/error" exact element={<ErrorLog />}/>
        </Routes>
    </>
  );
}

export default App;
