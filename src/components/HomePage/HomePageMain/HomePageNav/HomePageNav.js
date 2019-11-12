import React from 'react';
import "./HomePageNav.css";
import {Link} from 'react-router-dom'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


class HomePageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="home-nav-con">
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230074/healthie/logo_zitoka.svg')} />
                <ul id="home-nav-items">
                    <li><i class="fas fa-bell"></i></li>
                   <Link to="/setting"><li> <i class="fas fa-user-circle"></i></li></Link> 
                    <Link to="/dashboard"><li><button>Appointment</button></li></Link>
                </ul>
            </nav>

        )
    }
}

export default HomePageNav;