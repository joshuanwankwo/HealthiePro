import React from 'react';
import Container from 'react-bootstrap/Container'
import './PatientProfile.css'



class PatientProfile extends React.Component{
    render(){
        return ( 
        <div>

                <Container className="container-fluid">

                        <section className="titleCard">
                            <h3>Basic information</h3>  <h3> <a>Edit Profile</a></h3>
                        </section>

                        <section className="card card1">
                            <div> <h2>First Name</h2> <p> Emeka </p> </div>
                            <div> <h2>Last Name</h2> <p> Nwangwu </p> </div>
                            <div> <h2>Email Address</h2> <p> Okafor@gmail.com </p> </div>
                            <div> <h2>Phone Number</h2> <p> 08161565745 </p> </div>
                            <div className="address"> <h2>Address</h2> <p> No 8 ogbuagu street bayelsa enugu </p> </div>
                        </section>

                        <section className="titleCard">
                            <h3>Next of kin Information</h3>  
                        </section>
                        <section className="card card2">
                            <div> <h5>First Name</h5> <p> ..... </p> </div>
                            <div> <h2>Last Name</h2> <p> ...... </p> </div>
                            <div> <h2>Email Address</h2> <p> ............ </p> </div>
                            <div> <h2>Phone Number</h2> <p> ............ </p> </div>
                            <div> <h2>Address</h2> <p> ................................. </p> </div>
                        </section>

                </Container>

        </div>
    )}
}

export default PatientProfile;