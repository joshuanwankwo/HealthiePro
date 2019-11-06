import React, { Component } from 'react'
import './modal.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

class Modal extends Component {
    constructor(props){
        super(props);
    }
    handleClick(){
    this.props.history.push('./symptoms')
    }
    render() { 
        return ( 
            <div >

                <div className="cards-wrapper">

                
                    <div className="card 1">
                            <h3>Specialty</h3>
                            <img src="./doctor.svg"/>
                        </div>
                

                        <div className="card 2">
                            <h3>Name</h3>
                            <img src="./doctor.svg"/>
                        </div>


                        <Link to= "/symptom" className="card 3" > 

                                <div >
                                    <h3>Symptoms</h3>
                                    <img src="./doctor.svg"/>
                                </div>

                        </Link>

                        <div className="card 4">
                            <h3>Hospital</h3>
                            <img src="./doctor.svg"/>
                        </div>

                </div>
                    
            </div>
         );
    }
}
 
export default Modal;