import React from 'react';
import './find-a-doctor.css';
import NavBar from '../findADoctorNav/navBar';
import FindADoctorCard from '../findADoctorCard/findADoctorCard';


class FindADoctor extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="findADoctor-container">
                <NavBar />
                <div id="board">
                    <i class="far fa-times-circle"></i>
                    <header>Search for a close by Doctor</header>
                    <FindADoctorCard />
                </div>
            </div>
         );
    }
}


 
export default FindADoctor;