import React, { useState } from "react";
import './AirlineReservationSystem.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import  {LoginUser}  from "./src/actions/index";

function Login() {
 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state)=>state.loggedIn);
  //   console.log(isLoggedIn);
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login succssufully");
    dispatch(LoginUser());
     navigate('/home')
    setEmail("");
    setPassword("");
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
    return (
    <div className="image">
      <form onSubmit={handleSubmit} className="card">
        <div className="cardshadow">
          <div className="input-container">
            <label >Email </label>
            <input style={{marginLeft:"50px",outline:"none"}}
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={emailHandler}
            required />
          </div>
          <br></br>
          <div className="input-container">
            <label>Password </label>
            <input style={{marginLeft:"20px",outline:"none"}}
              type="password"
              name="password"
              value={password}
              onChange={passwordHandler}
           required />
          </div>
     <button type="submit" style={{marginTop:"40px",width:"150px",height:"40px" , marginLeft:"25%"}}>Login</button>
        </div>
      </form>
     </div>
  );
}

export default Login;
