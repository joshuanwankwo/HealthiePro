import React from 'react';
import "./HomePageNav.css";
import { Link } from 'react-router-dom'

import bell from "../../../../assets/bell-white.svg"
import profile from "../../../../assets/profile-white.svg"

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
            <header class="header-home">
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230074/healthie/logo_zitoka.svg')} />

                <ul>
                    <li><img src={bell} /></li>
                    <li><img src={profile} /></li>
                    <li class="dashboard-header-button">Appointments</li>
                </ul>
            </header>

        )
    }
}

export default HomePageNav;