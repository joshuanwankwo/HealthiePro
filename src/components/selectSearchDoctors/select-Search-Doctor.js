import React, { Component } from 'react';
import './select-Search-Doctor.css';

class selectSearchedDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="searchedDoctorsContainer">
                <div id="navWrapper">
                    <div className="fdoc-logo">
                        <img src="./Healthie-Logo2.svg" id="fdoc-logo" />
                    </div>
                    <div className="fdoc-navigation">
                    <i class="fas fa-user-circle"></i>
                    <i class="fas fa-bell"></i>
                        <a href="#" >Appointment</a>
                    </div>
                </div>
                <div id="relatedSearch">
                    <div id="searchBox">
                    <input type="search" placeholder="ifedili"/>
                    <i class="fas fa-search"></i>
                    </div>

                    <section id="result-container">
                    <h1>Related Search</h1>
                    <div id="resultData">
                            <img src="./DrDebby.png" />
                            <div id="details">
                            <h1 id='name'>Dr. Ifedili Joshua</h1>
                            <h2 id='specilaty'>Gynacologist</h2>
                            <h3 id='hospital'>Graceland Hospital</h3>
                            <h4 id ='address'>KM 7 Enugu Onitsha Express way Enugu, Nigeria</h4>
                            <div id="star">
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            </div>
                            <a href="#">Book Appointment  ></a>
                            </div>

                    </div>                    
                    <div id="resultData">
                            <img src="./DrDebby.png" />
                            <div id="details">
                            <h1 id='name'>Dr. Ifedili Joshua</h1>
                            <h2 id='specilaty'>Gynacologist</h2>
                            <h3 id='hospital'>Graceland Hospital</h3>
                            <h4 id ='address'>KM 7 Enugu Onitsha Express way Enugu, Nigeria</h4>
                            <div id="star">
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            </div>
                            <a href="#">Book Appointment  ></a>
                            </div>

                    </div>                    
                    <div id="resultData">
                            <img src="./DrDebby.png" />
                            <div id="details">
                            <h1 id='name'>Dr. Ifedili Joshua</h1>
                            <h2 id='specilaty'>Gynacologist</h2>
                            <h3 id='hospital'>Graceland Hospital</h3>
                            <h4 id ='address'>KM 7 Enugu Onitsha Express way Enugu, Nigeria</h4>
                            <div id="star">
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            </div>
                            <a href="#">Book Appointment  ></a>
                            </div>

                    </div>                    
                    <div id="resultData">
                            <img src="./DrDebby.png" />
                            <div id="details">
                            <h1 id='name'>Dr. Ifedili Joshua</h1>
                            <h2 id='specilaty'>Gynacologist</h2>
                            <h3 id='hospital'>Graceland Hospital</h3>
                            <h4 id ='address'>KM 7 Enugu Onitsha Express way Enugu, Nigeria</h4>
                            <div id="star">
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            </div>
                            <a href="#">Book Appointment  ></a>
                            </div>

                    </div>                    
                    <div id="resultData">
                            <img src="./DrDebby.png" />
                            <div id="details">
                            <h1 id='name'>Dr. Ifedili Joshua</h1>
                            <h2 id='specilaty'>Gynacologist</h2>
                            <h3 id='hospital'>Graceland Hospital</h3>
                            <h4 id ='address'>KM 7 Enugu Onitsha Express way Enugu, Nigeria</h4>
                            <div id="star">
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            <img src="./Star.svg" />
                            </div>
                            <a href="#">Book Appointment  ></a>
                            </div>

                    </div>
                    </section>
                </div>

            </div>

        );
    }
}




export default selectSearchedDoctor;