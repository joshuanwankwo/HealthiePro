import React, { Component } from 'react';
import './HomeCards.css';
import Modal from '../../../modal/modal';
import {Link} from 'react-router-dom'


class HomeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }

    render() {
        return (

            <div>
                <div className="home-cards-con">
                    <Link to="/selectSearchedDoctors">
                        <div className="home-card">
                            <p>Meet a Doctor</p>
                            <img src="./doctor1.svg" />
                        </div>

                    </Link>

                    <div className="home-card" >
                        <p>Nearby Pharmacy</p>
                        <img src="./pharmacy.svg" />
                    </div>

                    <div className="home-card">
                        <p>First Aid</p>
                        <img src="./FirstAid.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard;