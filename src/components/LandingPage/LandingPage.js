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
            <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`} marginTop={`550px`} marginLeft={`60px`} padding={`20px`} /> 
        </div>

        <img className="doctors-img" src="./Img.png" width='' height='' />     
    </div>


        <About />
        <Services />
        <Solutions />
        <Team />
        <Footer />

    </div>

        ;
}



export default LandingPage;