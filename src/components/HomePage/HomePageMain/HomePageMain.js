import React from 'react';
import "./HomePageMain.css";
import HomeCards from './HomeCards/HomeCards';
import HomePageNav from './HomePageNav/HomePageNav';
import NavBar from '../../NavBar/NavBar';

class HomePageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="homeMain-con">
                       <HomePageNav />
                <section id="home-intro">
                    <p>Every day we bring hope </p>
                    <p>and smile to Patient we serve</p>
                </section>
                 <HomeCards history={this.props.history}/>
            </div>
        )
    }
}

export default HomePageMain;