import React from 'react';
import "./HomePageNav.css";

class HomePageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="home-nav-con">
              <img src="./logo.svg"/>
                <ul id="home-nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li> <i class="fas fa-user-circle"></i></li>

                </ul>
            </nav>

        )
    }
}

export default HomePageNav;