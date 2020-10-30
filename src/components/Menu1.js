import React, { Component } from 'react';
import "./Menu1.css";
import {Link} from 'react-router-dom';


export default class Menu1 extends Component {
    render() {
        return (
            <div className="Rehman">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                    
                  
                </ul>
            </div>
        )
    }
}
