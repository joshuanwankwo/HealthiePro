import React from 'react';
import './LandingPage.css';
import NavBarLandPage from './navbar/NavBarLandPage';
import Button from '../Button/Button';
import About from '../HomePage/About/About';
import Services from '../HomePage/Services/Services';
import Footer from '../HomePage/Footer/Footer';
import Solutions from '../HomePage/Solutions/Solutions';
import Team from '../HomePage/Team/Team';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });

function LandingPage(props) {


    return <div className="LandingPage-parent ">

        <NavBarLandPage />

        <div className="parent-text-btn">

            <h1 className="h1-tag">
                We are comitted to your health
        </h1>

            <p className="p-tag">
                Since the first day of operation Healthie, our team has been
                focused on building a high-quality healthcare services
        </p>

            <div>
                <Link to="/signup">
                    <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`} marginTop={`500px`} marginLeft={`40px`} /> 
                </Link>
            </div>

        </div>

        <img className="doctors-img" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230072/healthie/Img_kwifbg.png')} width='550px' height='650px' />

        <About />
        <Services />
        <Solutions />
        <Team />
        <Footer />

    </div>

        ;
}



export default LandingPage;