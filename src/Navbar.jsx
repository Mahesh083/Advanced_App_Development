// import React from 'react';
// import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import { Button } from "@mui/material";
import "./NavBar.css"
import { Link } from "react-router-dom";
import university from './assets/university.jpg';
import menus from './assets/menus.png';
function Navbar() {
    return (
       <div className="body">
      <div class="nav">
      <div class="navcontent">
      <Link to="/" class="text"><Button variant="contained">Home</Button></Link>
      <Link to="/about" class="text"><Button variant="contained">About us</Button></Link>
      <Link to="/addcourse" class="text"><Button variant="contained">course</Button></Link>

      </div>
      <div className="login">
      <Link to="/login" class="text"><Button variant="contained">Login</Button></Link>
      </div>
      <img src={university} alt=""></img>
      </div>
      </div>
    );
  }
  
  export default Navbar;