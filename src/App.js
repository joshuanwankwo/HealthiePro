import React from 'react';
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
import CongratsModal from '../src/components/congratsModal/congratsModal';
import UserSetting from './components/userProfileSetting/userProfileSetting';
import Notifications from './components/notifications/noifications';
import RelatedDoctors from './components/relatedDoctors/relatedDoctors'

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
                    <Route path="/selectsearcheddoctors" component={SelectSearchedDoctor} />
                    <Route path="/dashboard" component={userDashboard} />
                    <Route path="/bookdoctor" component={BookDoc} />
                    <Route path="/setting" component={UserSetting} />
                    <Route path="/congrats" component={CongratsModal} />
                    {/* <Route path="/bookadoc" component={BookaDoc} /> */}
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/relatedoc" component={RelatedDoctors} /> 
                </Switch>
            </BrowserRouter>

        </div>
    )}
}

export default App;
