import React, { Component } from 'react';
import './HomeCards.css';
import Modal from '../../../modal/modal';
import {Link} from 'react-router-dom'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});


class HomeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }
   handleClick(){
       this.props.history.push('/selectsearcheddoctors')
   }
    render() {
        return (

            <div>
                <div className="home-cards-con">
                    
                        <div className="home-card" onClick={this.handleClick.bind(this)}>
                            <p>Meet a Doctor</p>
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230043/healthie/doctor1_gevksn.svg')} />
                        </div>

                    <div className="home-card" >
                        <p>Nearby Pharmacy</p>
                        <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230078/healthie/pharmacy_lcpgks.svg')}/>
                    </div>

                    <div className="home-card">
                        <p>First Aid</p>
                        <img src={cloudinaryCore.url("https://res.cloudinary.com/healthie/image/upload/v1573230056/healthie/FirstAid_p6gdvj.svg")}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard;