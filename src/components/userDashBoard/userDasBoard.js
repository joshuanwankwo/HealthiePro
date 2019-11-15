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

        let appointments = this.state.appointmentsInfo.map((appointment, key)=>{
                console.log(appointment.doctor.name, "this is your resolved name");
            return(

            <div id='userDashboard-card' key>
            <div id='time'>
                <h5 id='day'>{appointment.status}</h5>
                <h5 id='hour'>21 Hours</h5>
            </div>
            <div id='details'>
                <img id='icon' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230066/healthie/icon_vm64nm.png')} />
                <aside id='texts'>
                    <h5 id='name'>{appointment.doctor.name}. </h5>
                    <h5 id='specialty'>{appointment.doctor.specialty}</h5>
                    <h5 id='specialty'>Graceland Hospital</h5> <br/>
                    <h5 id='specialty'>{appointment.location} <br /> Enugu  </h5>
                    <div id='action'>
                        <h5 id='reschedule'>Reschedule Appointment</h5>
                        <h5 id='cancle'>Cancle Appointment</h5>
                    </div>
                </aside>
            </div>
        </div>

            )
        })


        // const appointmentsInfo = this.state.appointmentsInfo
        // console.log(appointmentsInfo, "In render method")
        return (
            <div>
                <NavBar />
                <div id='dashboard-main'>
                    <Sidenav />

                    <div id='Dashboard-card-container'>
                        {appointments}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default userDashboard;