import React, { Component } from 'react';
import './sideNav.css';


class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <aside id="sidenav">
            <img id='sidenav-profilePic' src='./profilePic.png' />
            <ul id='sidenav-ul'>
                <li id="sidenav-ul-li"><i class="fas fa-calendar-check"></i>Appointment</li>
                <li id="sidenav-ul-li"><i class="fas fa-user"></i>Profile</li>
                <li id="sidenav-ul-li"><i class="fas fa-bell"></i>Notification</li>
                <li id="sidenav-ul-li"><i class="fas fa-sign-out-alt"></i>Logout</li>
            </ul>
         </aside>
         );
    }
}
 
export default Sidenav;