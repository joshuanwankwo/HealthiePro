import React, { Component } from 'react';
import './sideNav.css';


class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <aside id='aside'>
            <img id='profilePic' src='./profilePic.png' />
            <ul id='nav-ul'>
                <li><i class="fas fa-calendar-check"></i>Appointment</li>
                <li><i class="fas fa-user"></i>Profile</li>
                <li><i class="fas fa-bell"></i>Notification</li>
                <li><i class="fas fa-sign-out-alt"></i>Logout</li>
            </ul>
         </aside>
         );
    }
}
 
export default Sidenav;