import React from 'react';
import './findADoctorCard.css';

class FindADoctorCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="cards-wrapper">
                    <div className="card 1">
                        <h3>Specialty</h3>
                        <img src="./doctor.svg"/>
                    </div>
                    <div className="card 2">
                        <h3>Name</h3>
                        <img src="./doctor.svg"/>
                    </div>
                    <div className="card 3">
                        <h3>Symptoms</h3>
                        <img src="./doctor.svg"/>
                    </div>
                    <div className="card 4">
                        <h3>Hospital</h3>
                        <img src="./doctor.svg"/>
                    </div>
            </div>
         );
    }
}
 
export default FindADoctorCard;