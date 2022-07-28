import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'

function NavBar() {

  const myState = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state)=>state.loggedIn);
   return (
    <nav className="navbar navbar-expand-lg bg-blue">
      <div className="container-fluid">
       <NavLink className="navbar-brand" to="/login">AirlineReservationSystem</NavLink>
         <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <NavLink className="navbar-brand" to={isLoggedIn?"/home":"/error"} >Home</NavLink>
          <NavLink className="navbar-brand" to={isLoggedIn?"/flight":"/error"}>FlightList</NavLink>
         <NavLink className="navbar-brand" to={isLoggedIn?"/user":"/error"}>Add {myState} User</NavLink>
         <NavLink className="navbar-brand" to={isLoggedIn?"/about":"/error"}>About</NavLink>
         <NavLink className="navbar-brand" to={isLoggedIn?"/logout":"/error"}>Logout</NavLink>
        
           </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
