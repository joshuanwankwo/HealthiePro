import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage'
import SignUp from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage'
import BookDoc from './components/BookDoc/BookDoc'
import modal from './components/modal/modal';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Symptoms from './components/symptom/symptom';
import SelectSearchedDoctor from './components/selectSearchDoctors/select-Search-Doctor';
import UserDashboard from './components/userDashBoard/userDasBoard';
import DoctorProfile from './components/DoctorsProfile/DoctorsProfile';
import UserSetting from './components/userProfileSetting/userProfileSetting';
import UserLayout from './components/Layout/UserLayout';


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
                    <Route path="/dashboard" render={props =>  <UserLayout>
                        <UserDashboard />
                    </UserLayout>} />
                    <Route path="/bookdoctor" component={BookDoc} />
                    <Route path="/setting" component={UserSetting} />
                </Switch>

            </BrowserRouter>

        </div>
    )}
}

export default App;
