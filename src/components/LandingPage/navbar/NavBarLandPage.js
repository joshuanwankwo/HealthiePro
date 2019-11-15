import React from 'react';
import './NavBarLandPage.css'
import { BrowserRouter as Router, Link, } from "react-router-dom";

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });

class NavBarLandPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header-landing" >

                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230076/healthie/logo1_iesguq.svg')} />

                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about-us"><li>About</li></a>
                    <a href="#service"><li>Services</li></a>
                    <Link to="/login"><li className="dashboard-header-button2"> Login</li></Link>
                    <Link to="/signup"><li className="dashboard-header-button">Sign Up </li></Link>
                </ul>
            </header>
        )
    }
}

export default NavBarLandPage;