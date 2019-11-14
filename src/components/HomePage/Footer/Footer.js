import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <section id="home-footer-con-wrapper">
            <div className="home-footer-text-con">
                <div>
                    <p id="home-footer-about">About Us</p>
                    <p className="home-footer-texts">Healthie is the industry leader in software<br></br>
                        and services for telemedicine and virtual <br></br>
                        health. Our best-in-breed solutions - built <br></br>
                        on the Healthie platform - revolutionize the <br></br>
                        way hospitals and other clinical care <br></br>
                        facilities operate and interact with patients.  </p>
                <p id="follow" >Follow Us</p>

                </div>
                <div id="footer-blog">
                    <p id="home-recent-blog">Recent Blog Posts</p>
                    <p className="home-footer-texts"><strong>Healthie</strong>: Your weight and how its affecting<br></br> your daily living</p>
                    <p className="home-footer-texts"><strong>Healthie</strong>: Your weight and how its affecting <br></br>your daily living</p>
                </div>

                <div id="footer-contact">
                    <p id="home-footer-contact">Contact Us </p>
                    <div className="footer-contacts">
                        <p className="home-footer-texts">info@healthienation.com</p>
                        <p className="home-footer-texts">+234-333-healthie </p>
                        <p className="home-footer-texts">+234-333-healthie </p>
                        <p className="home-footer-texts">+234-333-healthie </p>
                    </div>

                </div>


            </div>

            <div id="home-social-media-cons">
                <i class="fa fa-facebook"></i>
            </div>
        </section>
    )
}

export default Footer;