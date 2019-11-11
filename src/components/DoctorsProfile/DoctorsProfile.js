import React from 'react';
import Form from 'react-bootstrap/Form';
import './DoctorProfile.css';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });


function DoctorProfile(props) {
    let { name, address, email, phone, specialty, bio } = props.location.state
    return (
        <div className="Doc-profile-parent-div">
            <NavBar />
            <div className="doc-profile-sub-div">
                <div className="doc-profile-image-con">
                    <img className="Doc-profile-pic" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230054/healthie/DoctorsProfile_ggywwy.jpg')} />
                </div>

                {console.log(props.location.state)}

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

                        <Link to="/bookdoctor">
                            <div>
                                <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`} />
                            </div>
                        </Link>
                    </div>


                </div>

            </div>
        </div>


    )
}

export default DoctorProfile;