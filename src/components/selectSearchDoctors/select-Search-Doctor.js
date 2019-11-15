import React, { Component } from 'react';
import './select-Search-Doctor.css';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

import search from "../../assets/search-icon.svg"
import funnel from "../../assets/funnel.svg"
import muse from "../../assets/muse.png"
import star from "../../assets/start.svg"

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


class SelectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
    }
    componentDidMount() {
        // console.log('this.props', this.props)
        fetch("https://healthieapp.herokuapp.com/api/doctors")
            .then(function (response) {
                return response.json();
            }).then((body) => {
                this.setState({
                    doctors: body.data
                })
            })
        setTimeout(() => console.log(this.state.doctors[0].name), 3000)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(doctor) {
        console.log("clicked")
        this.props.history.push({ pathname: "/doctorprofile", state: doctor })
    }

    render() {
        let doctorsResult = this.state.doctors.map((doctor, key) => {
            return (
                //map through the doctors on the data base and showcase them on client side

                <div id="resultData" onClick={() => { this.handleClick(doctor) }}>



                    <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230051/healthie/DrDebby_snh9xq.png')} />
                    <div id="details">
                        <h1 id='name'>{doctor.name}</h1>
                        <h2 id='specilaty'>{doctor.specialty}</h2>
                        <h3 id='hospital'>Graceland Hospital</h3>
                        <h4 id='address'>{doctor.address}</h4>



                        <div id="star">
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                        </div>

                        <a href="#">Book Appointment  ></a>

                    </div>

                </div>
            )

        })

        return (
            <div>
                <NavBar />
                <div id="search-doctor-body">
                    <div></div>
                    <div className="search-doctor-section">
                        <div className="search-doctor-container">
                            <div className="search-bar">
                                <div className="search-input">
                                    <input type="text" placeholder="Search doctor"/>
                                    <div
                                        style={{display: "flex", flexDirection: "column", justifyContent: "spaceBetween", width: "50px", cursor: "pointer"}}>
                                        <img src={search} alt="" />
                                    </div>
                                </div>

                                <img style={{display: "block"}} src={funnel} alt="" />
                            </div>
                            <h2>Related Search</h2>
                            <div className="search-card">
                                <img style={{borderRadius: "5px"}} src={muse} alt="" />
                                <div
                                    style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px 20px"}}>
                                    <div>
                                        <h2>Dr. Strange</h2>
                                        <p>Pediatric, Surgery</p>
                                        <p>Graceland Hospital</p>
                                        <p>5 Osimiri Street Transekulu Enugu.</p>
                                        <div className="star-group">
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                        </div>
                                    </div>
                                    <div>
                                        <a className="ap-blue" href="">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="relatedSearch">
                    <div id="searchBox">
                        <input type="search" placeholder="Search..." />
                        <i class="fas fa-search"></i>
                    </div>

                    <section id="result-container">
                        <h1>Related Search</h1>
                        {doctorsResult}
                    </section>
                </div> */}

            </div>

        );
    }
}




export default SelectSearchedDoctor;