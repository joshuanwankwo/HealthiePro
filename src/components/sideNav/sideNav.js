import React, { Component } from 'react';
import './sideNav.css';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


class Sidenav extends Component {
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
         console.log(body)
         this.setState({
            appointmentsInfo: body.data
         })
      });
   }
   render() {
      let appointment = this.state.appointmentsInfo.map((appointment, key) => {
         return appointment
      })
      console.log(`this are your appointment ${appointment}`)
      return (
         // <aside id="sidenav">
         //    <img id='sidenav-profilePic' src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230078/healthie/profilePic_be1tvr.png')} />
         //    <ul id='sidenav-ul'>
         //       <li id="sidenav-ul-li"><i class="fas fa-calendar-check"></i>Appointment</li>
         //       <li id="sidenav-ul-li"><i class="fas fa-user"></i>Profile</li>
         //       <li id="sidenav-ul-li"><i class="fas fa-bell"></i>Notification</li>
         //       <li id="sidenav-ul-li"><i class="fas fa-sign-out-alt"></i>Logout</li>
         //    </ul>
         // </aside>

         <aside>
            <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230078/healthie/profilePic_be1tvr.png')}/>
            <ul>
               <li className="active-dashboard"><i class="fas fa-calendar-check"></i>Appointments</li>
               <li><i class="fas fa-user"></i>Profile</li>
               <li><i class="fas fa-bell"></i>Notifications</li>
               <li><i class="fas fa-sign-out-alt"></i>Logout</li>
            </ul>
         </aside>
         );
   }
}

export default Sidenav;