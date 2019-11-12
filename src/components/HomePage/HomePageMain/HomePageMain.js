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
                <HomePageNav />
                <div id="">
                    <section id="home-intro">
                        <p>Every day we bring hope </p>
                        <p>and smile to Patient we serve</p>
                    </section>
                    <HomeCards />
                </div>
            </div>
        )
    }
}

export default HomePageMain;