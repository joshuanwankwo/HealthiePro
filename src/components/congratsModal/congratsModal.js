import React, { Component } from 'react'
import './congratsModal.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";


import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

class CongratsModal extends Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        return ( 
            <div className= "congModalWrapper" >

<div className="cong-Modal-Content">

            <div className="cong-modal-success-Logo">
                    <img className="" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230036/healthie/successfulLogo_ehzugg.png')}  />
            </div>

<div className="cong-modal-writtenContent">

<div>
            <p>
               Appointment Booked Successfully
            </p>
</div>


<div>
                   <Link to ="/dashboard" > <p>
                        continue
                    </p> </Link>
</div>

</div>
    </div>
                    
        
            </div>
         );
    }
}
 
export default CongratsModal;