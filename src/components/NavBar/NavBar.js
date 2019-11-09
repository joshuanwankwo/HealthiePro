import React from 'react';
import './NavBar.css';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="nav-con">
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230062/healthie/Healthie-Logo2_cknbkz.svg')} />
                <ul id="nav-items">
                    <li><i class="fas fa-bell"></i></li>
                    <li> <i class="fas fa-user-circle"></i></li>
                    <li><button>Appointment</button></li>
                </ul>
            </nav>

        )
    }
}

export default NavBar;