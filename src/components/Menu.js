import React from 'react';
import logo1 from '../logo/default/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import "./Menu.css";
import {Link} from 'react-router-dom';

const divStyle = {
    // paddingRight: "1px !important",
    // paddingLeft: "1px !important",
   
  };

const divStyle1 = {
  //  margineLeft: "14px !important",
  //  color:"black !important"
  };
const Menu = () => {
  
    return (
        <div  className="rehman">

      <nav className="navbar navbar-expand-lg navbar-dark bg-white rounded">
    <div className="container">
           
    <Link className="navbar-brand" to="/" href="#">
    <img src={logo1} width="300" height="auto" />

    </Link>
   


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
  <ul style={{ ...divStyle1,...{}}} className="navbar-nav ml-auto">
    <li style={{ ...divStyle,...{ marginLeft:"12px",}}}  className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">

  <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/" className="nav-link active">MY ACCOUNT </Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Resume" className="nav-link active ">SIGN IN</Link>
    </li>

    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/About"  className="nav-link active ">CHECKOUT</Link>
    </li>
    
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>

  </ul>
  </div>
  </div>
</nav>
        </div>
    )
}
 

export default Menu;