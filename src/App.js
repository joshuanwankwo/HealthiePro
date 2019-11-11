import React from 'react';
<<<<<<< HEAD:src/public/App.js
import './App.css';
import LandingPage from '../components/LandingPage/LandingPage';
import HomePage from '../components/HomePage/HomePage'
import SignUp from '../components/SignupPage/SignupPage';
import LoginPage from '../components/LoginPage/LoginPage'
import BookDoc from '../components/BookDoc/BookDoc'
import modal from '../components/modal/modal';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Symptoms from '../components/symptom/symptom';
import SelectSearchedDoctor from '../components/selectSearchDoctors/select-Search-Doctor';
import userDashboard from '../components/userDashBoard/userDasBoard';
import DoctorProfile from '../components/DoctorsProfile/DoctorsProfile';
import CongratsModal from '../components/congratsModal/congratsModal'
// import BookaDoc from '../components/BookaDoc/BookaDoc'

=======
import LandingPage from '../src/components/LandingPage/LandingPage';
import HomePage from '../src/components/HomePage/HomePage'
import SignUp from '../src/components/SignupPage/SignupPage';
import LoginPage from '../src/components/LoginPage/LoginPage'
import BookDoc from '../src/components/BookDoc/BookDoc'
import modal from '../src/components/modal/modal';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Symptoms from '../src/components/symptom/symptom';
import SelectSearchedDoctor from '../src/components/selectSearchDoctors/select-Search-Doctor';
import userDashboard from '../src/components/userDashBoard/userDasBoard';
import DoctorProfile from '../src/components/DoctorsProfile/DoctorsProfile';
import CongratsModal from '../src/components/congratsModal/congratsModal'
import BookaDoc from '../src/components/BookaDoc/BookaDoc'
import UserSetting from './components/userProfileSetting/userProfileSetting';
>>>>>>> 217e3b8130f5c2556de7843898f00fbf744eb16a:src/App.js

class App extends React.Component{
    render(){
        return ( 
        <div>
              <BrowserRouter>

                <Switch>
                    <Route path="/" component={LandingPage} exact/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/homepage" component={HomePage}/>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/symptom" component={Symptoms}/>
                    <Route path="/modal" component={modal} />
                    <Route path="/bookdoc" component={BookDoc} />
                    <Route path="/doctorprofile" component={DoctorProfile} />
                    <Route path="/selectSearchedDoctors" component={SelectSearchedDoctor} />
                    <Route path="/dashboard" component={userDashboard} />
                    <Route path="/bookdoctor" component={BookDoc} />
                    <Route path="/setting" component={UserSetting} />
                    <Route path="/congrats" component={CongratsModal} />
<<<<<<< HEAD:src/public/App.js
                    {/* <Route path="/bookadoc" component={BookaDoc} /> */}
=======
>>>>>>> 217e3b8130f5c2556de7843898f00fbf744eb16a:src/App.js
                </Switch>
            </BrowserRouter>

        </div>
    )}
}

export default App;
