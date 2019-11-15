import React from 'react';
import './NavBar.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

import bell from "../../assets/bell.svg"
import profile from "../../assets/profile.svg"

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


const NavBar = (props) => {
    return (
        
        <header>
            <Link to ="/" id="navbar-con-img-link">
            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230076/healthie/logo1_iesguq.svg')} />
            </Link>
            <ul>
                <li><img src={bell} /></li>
                <li><img src={profile} /></li>
                <li class="dashboard-header-button">Appointments</li>
            </ul>
        </header>

    )
}

export default NavBar;