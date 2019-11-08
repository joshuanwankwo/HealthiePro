import React from 'react';
import './SymptomCard.css';

function SymptomCard(props) {
    return (
        <div id="home-symptom-card-wrapper">
            <div id="home-symptom-card-con">
                <section id="home-symptom-card-text-con">
                    <p id="home-symptom-card-text">Identify your symptoms and be referred for the<br></br> appropriate
                   healthcare provider for the right treatments.</p>

                    <p id="home-symptom-card-check">Check Symptoms ></p>
                </section>
                <section>
                    <img src="./symptomcard.svg" />
                </section>
            </div>
        </div>
    )
}

export default SymptomCard;