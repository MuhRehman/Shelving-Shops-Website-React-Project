import React from 'react';
// import logo from '../logo.svg';
import logo from '../rehman.jpg';
import logo1 from '../logo5122.png';

import 'bootstrap/dist/css/bootstrap.css';
import '../components/Menu.css';
// import './App.css';
// const logo = require('./logo512.png');
import {Link} from 'react-router-dom';

const divStyle = {
    paddingRight: "43px !important",
    paddingLeft: "44px !important",
   
  };

const divStyle1 = {
   margineLeft: "144px !important",
  };
const Menu = () => {
  
    return (
        <div  className="rehman">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <div className="container">
           
    <a className="navbar-brand" href="#">
    <img src={logo1} width="100" height="50" />

    </a>
   


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
  <ul style={{ ...divStyle1,...{}}} className="navbar-nav ">
    <li style={{ ...divStyle,...{ marginLeft:"22px",}}} className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">

  <Link style={{ ...divStyle,...{fontSize:"30px"}}} to="/" className="nav-link active">Home </Link>
    </li>
    <li className="nav-item mr-4 ml-4" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"30px"}}} to="/Resume" className="nav-link active ">About</Link>
    </li>

    <li className="nav-item mr-4 ml-4" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"30px"}}} to="/About"  className="nav-link active ">Porfolio</Link>
    </li>
    
    <li className="nav-item mr-4 ml-4" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"30px"}}} to="/Contact" className="nav-link active">Contact</Link>
    </li>
    
  </ul>
  </div>
  </div>
</nav>
        </div>
    )
}
 

export default Menu;