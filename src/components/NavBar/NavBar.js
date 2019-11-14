import React from 'react';
import './NavBar.css';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});
          

const NavBar = (props) => {
    return (
        <nav id="navbar-con">
            <img id="navbar-con-img" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230076/healthie/logo1_iesguq.svg')} />
            <ul id="navbar-con-ul">
                <li id="navbar-con-ul-li"> <i class="fas fa-bell"></i></li>
                <li id="navbar-con-ul-li"> <i class="fas fa-user-circle"></i></li>
                <li id="navbar-con-ul-li"><button id="navbar-con-ul-li-btn">Appointment</button></li>
            </ul>
        </nav>

    )
}

export default NavBar;