import React, { Component } from "react";
import {Link} from 'react-router-dom'
import LoginPage from './LoginPage'



import './nav.css'

class NavBar extends Component{
    render(){
        return(
            <div>
                <LoginPage />
               <nav className="navbar navbar-expand-lg navbar-light bg-info">
                 <div className="container-fluid">
                  <Link className="navbar-brand" id="nav-heading" to="/">News Buzz</Link>
                  <button className="navbar-toggler" id="nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" id="nav-btn"></span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" id="nav" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="nav" to="/technology">Technology</Link>
                        </li>
                       
                     </ul>
                </div>
            </div>
        </nav>
        </div>
        )
    }
}


export default NavBar;