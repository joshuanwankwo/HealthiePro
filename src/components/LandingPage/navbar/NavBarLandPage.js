import React from 'react';
import './NavBarLandPage.css'
import {BrowserRouter as Router, Link, } from "react-router-dom";

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

class NavBarLandPage extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {
      Navlinks: [{link: "Home", id:1}, {link: "About", id:2}, {link: "Services", id:3}]
    };

}
 handleClick(event){
    
 }   


    render(){

        const Navitems = this.state.Navlinks.map((item)=>(
            <div  onClick={this.handleClick.bind(this)} key={item.id}>{item.link}</div>
      ));

        return (
            <div className="landing-Navbody" >

                   <div className="Logo"> <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230076/healthie/logo1_iesguq.svg')} /> </div> 

                        <div className="spacer"></div>

                    <div className="navitems"> {Navitems} </div>

                        {/* <div className="spacer"></div> */}


                    <div className="Navbtn-group">
                    <Link to="/login"> <button className="nav-btn nav-btn1">Login</button> </Link>

                    <Link to="/signup"> <button className="nav-btn 2 nav-btn2"> Sign Up </button> </Link>
                    </div>

            </div>
        )
    }
}


export default NavBarLandPage;