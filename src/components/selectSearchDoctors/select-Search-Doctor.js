import React, { Component } from 'react';
import './select-Search-Doctor.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

class SelectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors:[]
        }
    }
    componentDidMount(){
        fetch("https://healthieapp.herokuapp.com/api/doctors")
        .then(function (response) {
            return response.json();
        }).then((body) =>{
            this.setState({
                doctors:body.data
            })
             })
        setTimeout(()=>console.log(this.state.doctors[0].name), 3000)
    }
    render() {
        console.log(this.state.doctors)
         let doctorsResult = this.state.doctors.map((doctor, key)=>{
             return (

            <Link to ="DoctorProfile">

                 <div id="resultData">

            

                <img src="./DrDebby.png" />
                <div id="details">
                <h1 id='name'>{doctor.name}</h1>
                <h2 id='specilaty'>{doctor.specialty}</h2>
                <h3 id='hospital'>Graceland Hospital</h3>
                <h4 id ='address'>{doctor.address}</h4>

                

                <div id="star">
                <img src="./Star.svg" />
                <img src="./Star.svg" />
                <img src="./Star.svg" />
                <img src="./Star.svg" />
                <img src="./Star.svg" />
                </div>

                 <a href="#">Book Appointment  ></a> 

                </div>

            </div>
            </Link>
             )
             
        })
        return (
            <div id="searchedDoctorsContainer">
                <div id="navWrapper">
                    <div className="fdoc-logo">
                        <img src="./Healthie-Logo2.svg" id="fdoc-logo" />
                    </div>
                    <div className="fdoc-navigation">
                    <i class="fas fa-user-circle"></i>
                    <i class="fas fa-bell"></i>
                        <a href="#" >Appointment</a>
                    </div>
                </div>
                <div id="relatedSearch">
                    <div id="searchBox">
                    <input type="search" placeholder="ifedili"/>
                    <i class="fas fa-search"></i>
                    </div>

                    <section id="result-container">
                    <h1>Related Search</h1>
                    {doctorsResult}
                    </section>
                </div>

            </div>

        );
    }
}




export default SelectSearchedDoctor;