import React, { Component } from 'react';
import './HomeCards.css';
import HomePageNav from '../HomePageNav/HomePageNav'


 class HomeCard extends Component {
     constructor(props){
         super(props)
         this.state = { 
             display:false
          }
     }
     render() { 
         return ( 
            
            <div className="home-cards-con">
                
    
                <div onClick={this.handleModal} className="home-card">
                    <p>Meet a Doctor</p>
                    <img src="./doctor1.svg"/>
                </div>
    
                <div className="home-card">
                    <p>Nearby Pharmacy</p>
                    <img src="./pharmacy.svg"/>
                </div>
    
                <div className="home-card"> 
                    <p>First Aid</p>
                    <img src="./FirstAid.svg"/>
                </div>
    
                <div className="home-card">
                    <p>Nearby Hospitals</p>
                    <img src="./doctor1.svg"/>
                </div>
    
            </div>
          );
     }
 }
  
 export default HomeCard;
   
   
