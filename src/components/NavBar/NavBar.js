import React from 'react';
import './NavBar.css';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="nav-con">
                <img src="./logo1.svg" />
                <ul id="nav-items">
                    <li><i class="fas fa-bell"></i></li>
                    <li> <i class="fas fa-user-circle"></i></li>
                    <li><button>Appointment</button></li>
                </ul>
            </nav>

        )
    }
}

export default NavBar;