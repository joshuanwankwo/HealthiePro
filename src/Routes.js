import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage'
import SignUp from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage'
import FindADoc from './components/find-a-doc/find-a-doctor';
import PatientProfile from './components/PatientProfile/PatientProfile';
import UserSetting from './components/userProfileSetting/userProfileSetting';
import UserDashboard from './components/userDashBoard/userDasBoard';




class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path= "/" component= {LandingPage}
> </Route>
            <Route  path="/signup" component={SignUp}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/profile" component={PatientProfile}></Route>
            </Switch>
        );

    }
}
// const routes = [
//     {
        
//     },
//     {
//         path: "/",
//         component: HomePage,

//     },
//     {
//         path: "/homepage",
//         component: SignUp,

//     },
//     {
//         path: "/login",
//         component: LoginPage,

//     },
//     {
//         path: "/profile",
//         component: PatientProfile,

//     },
//     {
//         path: "/settings",
//         component: UserSetting,

//     },
//     {
//         path: "/dashboard",
//         component: UserDashboard,

//     }
// ]

export default Routes