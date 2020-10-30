import React from 'react';
import logo13 from './img/rehman.png';

// import template4 from './img/tempale4';
import {Animated} from "react-animated-css";
import './About.css';

const  headingstyle = {
            color:"white",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        }
const  hiddenstyle = {
    visibility: "hidden",

}
const  astyle = {
    color:"white",
       fontSize: "18px",
       fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    };

const About = () => {
    return (<div className="aboutstyle">
               <div className="container pt-2 pb-5">
               <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                     <div className="text-center mb-4">
                                <h1>My Recent Work </h1>
                               
            <h5 style={headingstyle}>Here are a few recent developed projects. Want to see live demo visit website.</h5>
                     </div>
                   <div className="row">
                  
                       <div className="col-lg-4">
                       <div className="porfolio1 text-center porfolio-animate">
                             <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a target="_blank" 
                                    href="https://abdulrehman500.github.io/top-main-dentist/"  style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio2 text-center porfolio-animate2">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a target="_blank"
                                                       href="https://tender-archimedes-843b89.netlify.com/" style={astyle} >Visit Website</a>
                            </div>
                           
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio3 text-center porfolio-animate3">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a  target="_blank"
                            href="https://optimistic-darwin-f7997d.netlify.com/" style={astyle} >Visit Website</a>
                            </div>
                            
                           </div>
                       </div>
                     
                      
                   </div>
                   </Animated>
                   <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

                  
                   <div className="row mt-5">
                  
                       <div className="col-lg-4">
                       <div className="porfolio4 text-center porfolio-animate4">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a  target="_blank"
                           href="https://affectionate-wozniak-871f53.netlify.com/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio5 text-center porfolio-animate5">
                       <a href="#" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a target="_blank"
                            href="http://royaltco.com/royal/top-dentist-white-master/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                       <div className="col-lg-4">
                       <div className="porfolio6 text-center porfolio-animate6">
                       <a href="" style={hiddenstyle}>.</a>
                           <div class="info">
                           <a target="_blank" 
                           href="https://optimistic-darwin-f7997d.netlify.com/" style={astyle} >Visit Website</a>
                            </div>
                           </div>
                       </div>
                     
                      
                   </div>
                   </Animated>
               </div>
    </div>);
};
export default About;
