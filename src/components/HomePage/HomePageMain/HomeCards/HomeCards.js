import React, { Component } from 'react';
import './HomeCards.css';
import Modal from '../../../modal/modal';


 class HomeCard extends Component {
     constructor(props){
         super(props)
         this.state = { 
            display:false
         }
         this.handleModal = this.handleModal.bind(this)
    }

    //handel modal function here---
    handleModal(){
        this.setState({display:!this.state.display})
        console.log("hi")
    }

     render() { 
         return ( 

            <div style={{
                width:'100%',
                height:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'relative'
            }}>

            {this.state.display === true && <div onClick={this.handleModal} style={{
                position:'absolute',
                position:'fixed',
                width:'100%',
                height:'100vh',
                background:'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))',
                top:'0px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Modal/>

            </div>}

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
            </div>
          );
     }
 }
  
 export default HomeCard;