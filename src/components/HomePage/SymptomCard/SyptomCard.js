import React from 'react';
import './SymptomCard.css';
import {Link} from 'react-router-dom'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

function SymptomCard(props) {
    return (
        <div id="home-symptom-card-wrapper">
            <div id="home-symptom-card-con">
                <section id="home-symptom-card-text-con">
                    <p id="home-symptom-card-text">Identify your symptoms and be referred for the<br></br> appropriate
                   healthcare provider for the right treatments.</p>
                <Link to="./symptom">
                    <p id="home-symptom-card-check">Check Symptoms ></p>
                </Link>
                </section>
                <section>
                    <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230069/healthie/symptomcard_e757xm.svg')}/>
                </section>
            </div>
        </div>
    )
}

export default SymptomCard;