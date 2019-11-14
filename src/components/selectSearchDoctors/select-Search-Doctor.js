import React, { Component } from 'react';
import './select-Search-Doctor.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

class SelectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            doctors:[]
        }
    }
    componentDidMount(){
        // console.log('this.props', this.props)
        fetch("https://healthieapp.herokuapp.com/api/doctors?q=")
        .then(function (response) {
            return response.json();
        }).then((body) =>{
            this.setState({
                doctors:body.data
            })
             })
        setTimeout(()=>console.log(this.state.doctors[0].name), 3000)
        this.handleClick = this.handleClick.bind(this)
    }
handleChange(event){
  this.setState({
       search:event.target.value
  })
}
    handleClick(doctor){
        console.log("clicked")
        this.props.history.push({pathname:"/doctorprofile", doctor: doctor})
    }

    render() {
         let doctorsResult = this.state.doctors.map((doctor, key)=>{
             return (
            //map through the doctors on the data base and showcase them on client side

                 <div id="resultData" onClick={()=>{this.handleClick(doctor)}}>

            

                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230051/healthie/DrDebby_snh9xq.png')} />
                <div id="details">
                <h1 id='name'>{doctor.name}</h1>
                <h2 id='specilaty'>{doctor.specialty}</h2>
                <h3 id='hospital'>Graceland Hospital</h3>
                <h4 id ='address'>{doctor.address}</h4>

                

                <div id="star">
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/Star_a0tuuj.svg')} />
                </div>

                 <a href="#">Book Appointment  ></a> 

                </div>

            </div>
             )
             
        })
        return (
            <div id="searchedDoctorsContainer">
                    <NavBar />
                <div id="relatedSearch">
                    <div id="searchBox">
                    <input type="search" placeholder="Search..." value={this.state.search} onChange={this.handleChange.bind(this)}/>
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