import React from 'react';
import Form from 'react-bootstrap/Form';
import './DoctorProfile.css';
import Button from '../Button/Button'
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

function DoctorProfile() {

    return <div className="Doc-profile-parent-div">

    <div>
         <img className="Doc-profile-pic" src="./DoctorsProfile.jpg"  />
    </div>


<div className="Doc-pro-left-side" > 

    <div>

        <h2>
            About Dr. Ifedili  Joshua
        </h2>

        <p>
            Senior Doctor at Graceland Hospital
        </p>

    </div>

    <div>
            <p>
                    Id excepteur in sit ipsum sit excepteur. Id Lorem nostrud nulla officia ut sunt do dolore minim. Adipisicing aliquip fugiat nisi ut veniam quis enim proident. Nulla irure eu deserunt sit ex quis consectetur est. Ut qui fugiat Lorem mollit duis enim fugiat in. Aliquip reprehenderit consectetur proident nisi nostrud veniam do. Consectetur culpa dolor aute laborum Lorem. Aliqua aliqua esse dolore velit proident eu sint quis tempor duis. Aliqua ut ut aute amet sint esse adipisicing ullamco laborum sint cupidatat Lorem qui commodo. 

                    Fugiat proident commodo duis nostrud nulla dolore ipsum. Eiusmod irure laborum officia Lorem velit amet in aute deserunt eiusmod elit. Sint labore occaecat cillum eu ullamco. Nisi deserunt et officia aliquip laborum veniam velit excepteur sint est. Excepteur 

                    cupidatat ea deserunt Lorem aliqua cillum ullamco qui cillum laboris do ullamco laborum ut. Enim exercitation exercitation aliqua voluptate veniam incididunt id. Quis culpa officia officia tempor sint amet tempor elit excepteur ea eu. 
            </p>
    </div>

    <div>

        <p> <strong> Degree: </strong>  Pediatric, Surgery Studies</p>
        <p> <strong> Specialty: </strong>  Pediatric, Surgery </p>
        <p> <strong> Experience: </strong>  5years </p>

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