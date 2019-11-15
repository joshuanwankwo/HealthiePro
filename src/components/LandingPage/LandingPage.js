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

import landingImg from '../../assets/landing-side-img.png'
import docImg from '../../assets/doc-pic-landing.png'
import doctorimg from '../../assets/doctor.png';
import Testo from '../../assets/Testo.png';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });

const footerStyles = {
    container: {
        margin: 0,
        backgroundColor: '#35444E',

    },
    textCon: {
        padding: 0,
        border: 'none'
    },
    textColor: {
        color: '#fff',
    }
}


function LandingPage(props) {

    return (
        <div>
            <NavBarLandPage />
            <div id="home" className="container landing-jumbotron">
                <div className="ladning-jumbo-left">
                    <h1>We are committed to your health</h1>
                    <p>Since the first day of operation Healthie, our team has been focused on building a high-quality healthcare services</p>
                    <button className="pri-but">Book Appointment</button>
                </div>
                <img className="doctors-img" src={landingImg} />
            </div>

            <div id="about-us" className="container landing-details">
                <img src={docImg} />
                <div className="landing-details-content">
                    <h3>About Us</h3>
                    <h2>Professional Health Care in Full Measure</h2>
                    <p>For us there are no minor aspect, because a quality result always depends on triflies. over the years of our activities, we have gained a unique experience of organizing health care services for our citizens. Private patients and business corporations feel safe and comfortable in choosing us as their no. 1 healthcare service provider.</p>
                </div>
            </div>
            <div id="service" className="container landing-details">
                <div className="landing-details-content">
                    <h3>Our Services</h3>
                    <h2>We Provide you with the best health care services</h2>
                    <p>We are compassionate about the community and the way their health affect their everyday activity with their environment and with one another.<br /><br /> Therefore our services ranging from the simplest first aid treatments to complex consultions with our medical professionals are available nationwide to all as our priority is to create a healthy and happier world.</p>
                </div>
                <img src={doctorimg} />
            </div>
            <div id="our-solutions" className="container landing-details">
                <img src={Testo} />
                <div className="landing-details-content">
                    <h3>Our Solutions</h3>
                    <h2>We provide the best quality of healthcare for the communities.</h2>
                    <p>For us there are no minor aspect, because a quality result always depends on triflies. over the years of our activities, we have gained a unique experience of organizing health care services for our citizens.<br /><br /> Private patients and business corporations feel safe and comfortable in choosing us as their no. 1 healthcare service provider.</p>
                </div>
            </div>


            <Team />
            <Footer styles={footerStyles} />

        </div>
    )
}



export default LandingPage;