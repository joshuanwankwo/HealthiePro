import React from 'react';
import Form from 'react-bootstrap/Form';
import './DoctorProfile.css';
import Button from '../Button/Button'
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

function DoctorProfile(props) {
 let { name, address, email, phone, specialty, bio} = props.location.state 
    return <div className="Doc-profile-parent-div">

    <div>
         <img className="Doc-profile-pic" src="./DoctorsProfile.jpg"  />
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

            <Link to ="/bookdoctor">
                    <div>
                <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`}/> 
                    </div>
            </Link>
    </div>
    

</div>

    </div>
              

;}

export default DoctorProfile;