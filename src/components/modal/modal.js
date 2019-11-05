import React, { Component } from 'react'
import './modal.css';

class Modal extends Component {
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

                        <div className="card 3">
                            <h3>Symptoms</h3>
                            <img src="./doctor.svg"/>
                        </div>

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