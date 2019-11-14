import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";
import './symptom.css';


class  Symptoms extends React.Component {
    render(){
        return (
            <div id="symptoms-con">
                <NavBar/>
                <div id="symptoms-intro-con">
                    <div id="symptoms-intro">
                        <p>
                            Identify your symptoms and be <br></br>referred for
                            the appropriate healthcare<br></br> provider for the
                            right treatments.
                       </p>
    
                    </div>
    
                    <div id="symptoms">
                        <p id="symptom-header">What are your Symptoms?</p>
    
                        <div>
                            <div className="symptom-card-con-1">
                                {/* <img src="./selectedMark.svg"/> */}
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                {/* <img src="./selectedMark.svg"/> */}
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                        </div>
    
                        <div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                        </div>
    
                        <div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                        </div>
    
                        <div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                            <div className="symptom-card-con-1">
                                <p>Sore Throat</p>
                            </div>
                        </div>
                        
    
                        <div id="symptoms-submit">
    
                            <Link to ="/selectSearchedDoctors">
                                <button>Submit</button> 
                            </Link> 
    
                        </div>
                    </div>
    
                </div>
    
    
            </div>
    
    
        )
    }
    
}

export default Symptoms;