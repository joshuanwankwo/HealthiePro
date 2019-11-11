import React from 'react';
import './NavBarLandPage.css'
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

class NavBarLandPage extends React.Component{
    constructor(props) {
        super(props);
        
    this.state = {
      Navlinks: [{link: "Home", id:1}, {link: "About", id:2}, {link: "Services", id:3}]
    };

}
    


    render(){

        const Navitems = this.state.Navlinks.map((item)=>(
            <div key={item.id}>{item.link}</div>
      ));

        return (
            <div className="landing-Navbody" >

                   <div className="Logo"> <img src="./Healthie-Logo.png" /> </div> 

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