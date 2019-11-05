import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <section id="home-footer-con">
            <div className="home-footer-text-con">
                <div>
                    <p id="home-footer-about">About Us</p>
                    <p className="home-footer-texts">Healthie is the industry leader in software and services
                        for telemedicine and virtual health. Our best-in-breed solutions -
                        built on the Healthie platform -
                        revolutionize the way hospitals and o
    ther clinical care facilities operate and interact with patients. </p>

                </div>

                <div >
                    <p id="home-recent-blog">Recent Blog Posts</p>
                    <p className="home-footer-texts"><strong>Healthie</strong>: Your weight and how its affecting<br></br> your daily living</p>
                    <p className="home-footer-texts"><strong>Healthie</strong>: Your weight and how its affecting <br></br>your daily living</p>
                </div>

                <div>
                    <p id="home-footer-contact">Contact Us </p>
                    <p className="home-footer-texts">info@healthienation.com</p>
                    <p className="home-footer-texts">+234-333-healthie </p>
                    <p className="home-footer-texts">+234-333-healthie </p>
                    <p className="home-footer-texts">+234-333-healthie </p>
                </div>


            </div>

            <div id="home-social-media-cons">
                <i class="fab fa-facebook"></i>
            </div>
        </section>
    )
}

export default Footer;