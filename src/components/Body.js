import React from 'react';
import $ from 'jquery';
import '../components/Body.css';
// import logo2 from './img/2.jpg';
import logo2 from './img/black1.png';
import logogit from './img/github-logo.png';
import logolink from './img/linkedin.png';
import logoinstr from './img/instagram.png';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';


  
 const  textstyle = {
 color:"white",
    fontSize: "42px"
 };




const  Body =  () => {

  

    return (
        <div className="main-home">
             <div className="container">
             <div class="row">
                 
                    <div class="col-lg-6 col-sm-6 col-12">
                    <div className="content-img text-center">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <img  src={logo2} className="personimg  zoom"   />
 
                    </Animated>
                  

                    </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                    <Animated animationIn="bounceInRight delay-5s "  animationOut="fadeOut" isVisible={true}>

                     <div  className="text-content1">
                         <h3 className="ml-4">Hey</h3>
                         <h1 className="text-rehman">I'm Abdul Rehman</h1>
                         <h1 className="text-rehman2">a young</h1>
                         <h1 className="text-rehman6" > <span style={ textstyle} >Front-end</span>  Web Developer.</h1>
                           <div className="row icons" id="icons" >
                       <a href="https://github.com/Rehman-coding"> <img src={logogit} className=" margin-1" width="50" height="50"/></a>
                       <a href="https://www.linkedin.com/in/abdul-rehman-8611505b/"> <img src={logolink} className=" margin-1" width="50" height="50"/></a>
                       <a href="https://www.instagram.com/rehman_coding/"> <img src={logoinstr}className=" margin-1" width="50" height="50"/></a>
                           </div>
                           {/* <Link  to="/About"  className="nav-link active ">Porfolio</Link> */}
                           
                     </div>
                     </Animated>
                     <div className="btn-rehman ">
                          <Link to="/About">
                          <div className="btn btn-primary work-btn" id="btn-event1">
                             View my work 
                          <i className="fa fa-arrow-right ml-3"></i>
                          </div>

                          
                          </Link> 
                          {/* <button>Rehman</button> */}
                          </div>
                    </div>
                </div>
             </div>
             {/* <div className="footer text-center mt-2 pt-5 bolder"> */}
             <div class="typewriter">
             <p class="line anim-typewriter mt-5">
             I like to code things from scratch, and  bringing ideas to life in the browser. 
      
             </p>
                 
            
            {/* </div> */}
             </div>
        </div>
   
    )
}

export default Body;