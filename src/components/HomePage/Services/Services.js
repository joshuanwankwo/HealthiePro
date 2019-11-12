import React from 'react';
import './Services.css'

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

function Services(props) {
    return (
        <section id="home-service-con">
            <div id="service-background-con">
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230037/healthie/testo_sy1sd3.svg')} />
            </div>
            <div id="home-service">
            
                <div id="home-service-con-text">
                    <p id="home-service-title">Our Services</p><br></br><br></br>
                    <p id="home-service-header">We Provide you with <br></br>the best health care services </p><br></br><br></br>
                    <p id="home-service-text">
                        We are compassionate about the community and the way their health affect their everyday activity with their environment and with one another.
                        <br></br> <br></br>Therefore our services ranging from the simplest first aid treatments to complex consultions with our medical professionals are available nationwide to all as our priority is to create a healthy and happier world.
                    </p>
                </div>
                <img id="home-test-doc"src={'https://res.cloudinary.com/healthie/image/upload/v1573230038/healthie/testDoc_zmd4ta.svg'} />
            </div>
            

        </section>
    )
}
export default Services;