import React, { Component } from 'react';
import './userProfileSetting.css';
import NavBar from '../NavBar/NavBar';
import Sidenav from '../sideNav/sideNav';

class UserSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar />
                <div id='user-Profile-Setting-container'>
                <Sidenav />
                <div id='user-Profile-Setting-userSettings'>
                        <div id='user-Profile-Setting-settingWrapper'>
                            <div  id='user-Profile-Setting-settingWrapper-top'>
                            <h5 id='user-Profile-Setting-settingWrapper-title'>Basic Information</h5>
                            <h5 id='user-Profile-Setting-settingWrapper-saveSetting'>Edit Details</h5>
                            </div>
                            <form id="user-Profile-Setting-settingWrapper-form">
                            <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>First Name</label>
                                <label for='firstName'>Last Name</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <h5>Emeka</h5>
                                <h5>Nwaogu</h5>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>Email Address</label>
                                <label for='firstName'>Phone Number</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <h5>emekanwaogu@gmail.com</h5>
                                <h5>07063358662</h5>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>Address</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <h5>Enugu Lifestyle and Goif City (Centenary City) Kilometer 7, Enugu/Port Harcourt Expressway Enugu, Nigeria'</h5>
                                </div>
                                <div  id='user-Profile-Setting-settingWrapper-top'>
                                <h5 id='title'>Next of Kin Information</h5>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>

                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>First Name</label>
                                <label for='firstName'>Last Name</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>Email Address</label>
                                <label for='firstName'>Phone Number</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
  
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
                                <label for='firstName'>Address</label>
                                </div>
                                <div id='user-Profile-Setting-settingWrapper-form-roww'>
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