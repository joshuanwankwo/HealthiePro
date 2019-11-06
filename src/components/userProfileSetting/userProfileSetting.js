import React, { Component } from 'react';
import './userProfileSetting.css';
import NavBar from '../NavBar/NavBar';
import Sidenav from '../sideNav/sideNav';

class UserSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar />
                <div id='container'>
                <Sidenav />
                <div id='userSettings'>
                        <div id='settingWrapper'>
                            <div  id='top'>
                            <h5 id='title'>Basic Information</h5>
                            <h5 id='saveSetting'>Edit Details</h5>
                            </div>
                            <form>
                            <div id='roww'>
                                <label for='firstName'>First Name</label>
                                <label for='firstName'>Last Name</label>
                                </div>
                                <div id='roww'>
                                <h5>Emeka</h5>
                                <h5>Nwaogu</h5>
                                </div>
                                <div id='roww'>
                                <label for='firstName'>Email Address</label>
                                <label for='firstName'>Phone Number</label>
                                </div>
                                <div id='roww'>
                                <h5>emekanwaogu@gmail.com</h5>
                                <h5>07063358662</h5>
                                </div>
                                <div id='roww'>
                                <label for='firstName'>Address</label>
                                </div>
                                <div id='roww'>
                                <h5>Enugu Lifestyle and Goif City (Centenary City) Kilometer 7, Enugu/Port Harcourt Expressway Enugu, Nigeria'</h5>
                                </div>
                                <div  id='top'>
                                <h5 id='title'>Next of Kin Information</h5>
                                </div>
                                <div id='roww'>

                                </div>
                                <div id='roww'>
                                <label for='firstName'>First Name</label>
                                <label for='firstName'>Last Name</label>
                                </div>
                                <div id='roww'>
                                <label for='firstName'>Email Address</label>
                                <label for='firstName'>Phone Number</label>
                                </div>
                                <div id='roww'>
  
                                </div>
                                <div id='roww'>
                                <label for='firstName'>Address</label>
                                </div>
                                <div id='roww'>
                                </div>
                            </form>
                        </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default UserSetting;