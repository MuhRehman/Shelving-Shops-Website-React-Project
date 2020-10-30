import React, { Component } from 'react';
import cv from './img/cv22.png';
import {Animated} from "react-animated-css";
import "./Resume.css";
// import { Document } from 'react-pdf'.
// import Cv from './img/cv.pdf';
const  wstyle = {
    width:'75%'
    };
const  wstyle2 = {
    width:'70%'
    };
const  wstyle3 = {
    width:'60%'
    };
const  wstyle4 = {
    width:'40%'
    };
const  wstyle5 = {
    width:'30%'
    };
const  wstyle6 = {
    width:'50%'
    };
const  wstyle7 = {
    width:'60%'
    };
const  astyle1 = {
   color:'rgb(5, 60, 105)',
   fontSize:'12px',
    };
export default class Resume extends Component {
    render() {
        return (
            <div className="resume-main">
            <div className="row">
                <div className="col-md-6">
            <div className="container text-center">
            <div className="heading mb-5">
            <h1>Who's this guy?</h1>
            <div className="paragrape">
            I'm the Front-End Developer for WebExert, OR.
            I have serious passion for UI effects, animations and creating intuitive,responsive, dynamic user experiences.
         
            </div>
             <div className="lets-call">
            <a href="" style={astyle1}>Let's make something special.</a>
            </div>
            </div>
                <img  className="cvtem" src={cv} alt=""/>
                {/* <a href='cvtem' download>Click to download</a> */}
                {/* <a href="cv" className="btn btn-primary m-5" download >Download  Resume
                {/* <img  className="cvtem" src={cv} alt=""/> */}
                {/* </a> */}
          
              </div>
                </div>
                <div className="col-md-6">
                <div class="progress">
                  <div className="bar-head">HTML</div>
                <div class="progress-bar progress-bar-success" style={wstyle}>80%</div>
                 </div>
                <div class="progress">
                  <div className="bar-head">CSS</div>
                <div class="progress-bar progress-bar-success" style={wstyle2}>70%</div>
                 </div>
                <div class="progress">
                  <div className="bar-head">JQuery</div>
                <div class="progress-bar progress-bar-success" style={wstyle3}>60%</div>
                 </div>
                <div class="progress">
                  <div className="bar-head">Javascript</div>
                <div class="progress-bar progress-bar-success" style={wstyle4}>40%</div>
                 </div>
                 <div class="progress">
                  <div className="bar-head">React</div>
                <div class="progress-bar progress-bar-success" style={wstyle5}>30%</div>
                 </div>
                <div class="progress">
                  <div className="bar-head">PHP</div>
                <div class="progress-bar progress-bar-success" style={wstyle6}>50%</div>
                 </div>
                <div class="progress">
                  <div className="bar-head">PhotoShop</div>
                <div class="progress-bar progress-bar-success" style={wstyle7}>60%</div>
                 </div>
              

                </div>
            </div>
              
            </div>
        )
    }
}
