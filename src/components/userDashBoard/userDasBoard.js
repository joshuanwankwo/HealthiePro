import React, { Component } from 'react';
import './userDashBoard.css';
import NavBar from '../NavBar/NavBar';
import Sidenav from '../sideNav/sideNav';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


class userDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointmentsInfo: []
        }
    }
    componentDidMount() {
        fetch("https://healthieapp.herokuapp.com/api/users/" + localStorage.getItem('userId') + '/appointments', {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "authtoken": localStorage.getItem('userToken')
            },
        }).then((response) => {
            return response.json();
        }).then((body) => {
            console.log(typeof (body.data), "from the request")
            this.setState({
                appointmentsInfo: body.data
            })
            console.log(this.state.appointmentsInfo, "Test")
        });
    }
    render() {

        let appointments = this.state.appointmentsInfo.map((appointment, key) => {
            console.log(appointment.doctor.name, "this is your resolved name");
            return (

                <div className="appointment-card" key>
                    <div className="appointment-card-left">
                        <div style={{ textAlign: "center" }}>
                            <h2>{appointment.status}</h2>
                            <h4>21 hours</h4>
                        </div>
                    </div>
                    <div className="appointment-card-right">
                        <img src={appointment.doctor.imgUrl} alt="" />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "spaceBetween" }}>
                            <div>
                                <h2>{appointment.doctor.name}</h2>
                                <p>{appointment.doctor.specialty}</p>
                                <p>{appointment.hospital}</p>
                                <p>{appointment.location}</p>
                            </div>
                            <div>
                                <a className="ap-blue" href="">Reschedule Appointment</a>
                                <a className="ap-red" href="">Cancel Appointment</a>
                                {/* <a class="ap-green" href="">Confirmed</a> */}
                            </div>
                        </div>
                    </div>
                </div>

            )
        })



        return (
            <div>
                <NavBar />
                <div id='dashboard-body'>
                    <Sidenav />
                    <main>
                        <div className="dashboard-main-container">
                            {appointments}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default userDashboard;