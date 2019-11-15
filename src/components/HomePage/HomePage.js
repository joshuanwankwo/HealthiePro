import React, { Component } from 'react';
import HomePageNav from './HomePageMain/HomePageNav/HomePageNav';
import Footer from './Footer/Footer';
import './HomePage.css';
import doctor from '../../assets/doctor.svg';
import pharmacy from '../../assets/pharmacy.svg';
import firstAid from '../../assets/First Aid.svg';
import sympthoms from '../../assets/check-sympthoms.png';

const footerStyles = {
  textColor: {
    color: '#35444E',
  }
}
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }
  handleClick() {
    this.props.history.push('/selectsearcheddoctors')
  }
  render() {
    return (

      <div>
        <HomePageNav />
        <div className="home-jumbotron">
          <h1>Everyday we bring hope and smile to the patient we serve</h1>

          <div className="container home-card-containers">
            <div className="home-card" onClick={this.handleClick.bind(this)}>
              <img src={doctor} alt="" />
              <p class="home-card-title">Meet a doctor</p>
              <p>Patients can book an appointment online with doctors.</p>
            </div>
            <div className="home-card">
              <img src={pharmacy} alt="" />
              <p className="home-card-title">Meet a doctor</p>
              <p>Patients can book an appointment online with doctors.</p>
            </div>
            <div className="home-card">
              <img src={firstAid} />
              <p className="home-card-title">Meet a doctor</p>
              <p>Patients can book an appointment online with doctors.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container check-symptoms">
            <div className="check-symptoms-left">
              <p>Identify your symptoms and be referred for the appropriate healthcare provider for the right treatments.</p>
              <a href="">Check Symptoms</a>
            </div>
            <img src={sympthoms} />
          </div>
          {/* <hr className="container" /> */}
        </div>
        <Footer styles={footerStyles} />
      </div >
    )
  }
}

export default HomePage;
