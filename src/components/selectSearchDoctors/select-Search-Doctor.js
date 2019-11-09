import React, { Component } from 'react';
import './select-Search-Doctor.css';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});


class SelectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors:[]
        }
    }
    componentDidMount(){
        // console.log('this.props', this.props)
        fetch("https://healthieapp.herokuapp.com/api/doctors")
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

    handleClick(doctor){
        console.log("clicked")
        this.props.history.push({pathname:"/doctorprofile", state: doctor})
    }

    render() {
        console.log(this.state.doctors)
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
                <div id="navWrapper">
                    <div className="fdoc-logo">
                        <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230076/healthie/logo1_iesguq.svg')} id="fdoc-logo" />
                    </div>
                    <div className="fdoc-navigation">
                    <i class="fas fa-user-circle"></i>
                    <i class="fas fa-bell"></i>
                        <a href="#" >Appointment</a>
                    </div>
                </div>
                <div id="relatedSearch">
                    <div id="searchBox">
                    <input type="search" placeholder="Search..."/>
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