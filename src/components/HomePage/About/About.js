import React from 'react';
import './About.css';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});

function About(props) {
    return (
        <div id="about-con">
            <section id="about">
<<<<<<< HEAD
                <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230048/healthie/aboutus_c0jw8z.svg')} />
=======
                <img src="./aboutus.png" />
>>>>>>> 217e3b8130f5c2556de7843898f00fbf744eb16a
                <div id="about-details">
                    <p id="about-title">About Us</p>
                    <p id="about-title-1"> Professional Health<br></br> Care in Full Measure</p>
                    <p id="about-text">For us there are no minor aspect, because a quality result always depends on triflies.
                    over the years of our activities, we have gained a unique experience of organizing health care services for our citizens. <br></br> <br></br>Private patients and business corporations feel safe and
                    comfortable in choosing us as their no. 1 healthcare service provider</p>
                </div>

            </section>

        </div>
    )
}
export default About;