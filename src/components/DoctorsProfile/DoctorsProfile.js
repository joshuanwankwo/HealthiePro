import React from 'react';
import Form from 'react-bootstrap/Form';
import './DoctorProfile.css';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


class DoctorProfile extends React.Component {
    constructor(props){
        super(props)
        console.log('lll => ', this.props)
        if (this.props && this.props.location.doctor){
            var data = {
                name: this.props.location.doctor.name,
                _id: this.props.location.doctor._id,
                address: this.props.location.doctor.address,
                email: this.props.location.doctor.email,
                phone: this.props.location.doctor.phone
            }
            this.saveDetails(data);
            console.log('saved props')
        }
        this.state ={
            name : this.geStore('name'),
            docId: this.geStore('doctorId'),
            address: this.geStore('address'),
            email: this.geStore('email'),
            phone: this.geStore('phone')
        }
        
    }
    componentDidMount(){
        
    }

    geStore(key){
        console.log('fetch')
        return localStorage.getItem(key);
    }

    saveDetails(data){
        localStorage.setItem("name", data.name);
        localStorage.setItem("doctorId", data._id);
        localStorage.setItem("address", data.address);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phone", data.phone);
    }
    handleClick(){
        console.log('Hello i am about leaving')
       this.props.history.push({pathname:'/bookdoc', docId:this.state.docId})
       console.log('new  id',this.state._id)
    }
    render(){
        let { name, address, email, phone, specialty, bio } = this.state
        return (
        <div className="Doc-profile-parent-div">
            <NavBar />
            <div className="doc-profile-sub-div">
                <div className="doc-profile-image-con">
                    <img className="Doc-profile-pic" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230054/healthie/DoctorsProfile_ggywwy.jpg')} />
                </div>


                <div className="Doc-pro-left-side" >

                    <div>

                        <h2>
                            About Dr.{name}
                        </h2>

                        <p>
                            {address}
                        </p>

                    </div>

                    <div>
                        <p>
                            {bio}
                        </p>
                    </div>

                    <div>

                        {/* <p> <strong> Degree: </strong>  Pediatric, Surgery Studies</p> */}
                        <p> <strong> Email: </strong>  {email}</p>
                        <p> <strong> Specialty: </strong>  {specialty} </p>
                        <p> <strong> phone: </strong>  {phone} </p>

                    </div>

                    <div className="action-btns">

                        
                            <div onClick={this.handleClick.bind(this)}>
                                <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`} />
                            </div>
                    </div>


                </div>

            </div>
        </div>


    )
        }
}

export default DoctorProfile;