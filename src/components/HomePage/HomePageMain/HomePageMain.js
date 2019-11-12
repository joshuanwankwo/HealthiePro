import React from 'react';
import "./HomePageMain.css";
import HomeCards from './HomeCards/HomeCards';
import HomePageNav from './HomePageNav/HomePageNav';

class HomePageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="homeMain-con">
                        <nav id="homepage-navbar-con">
            <img id="navbar-con-img" src="./logo1.svg" />
             <ul id="navbar-con-ul">
                <li id="navbar-con-ul-li"> <i class="fas fa-bell"></i></li>
                <li id="navbar-con-ul-li"> <i class="fas fa-user-circle"></i></li>
                <li id="navbar-con-ul-li"><button id="navbar-con-ul-li-btn">Appointment</button></li>
            </ul> 
        </nav>
                <section id="home-intro">
                    <p>Every day we bring hope </p>
                    <p>and smile to Patient we serve</p>
                </section>
                 <HomeCards />
            </div>
        )
    }
}

export default HomePageMain;