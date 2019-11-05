import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import HomePage from '../components/HomePage/HomePage'
import SignUp from '../components/SignupPage/SignupPage';
import LoginPage from '../components/LoginPage/LoginPage'
import {Switch,Route, BrowserRouter} from "react-router-dom";
import FindADoc from '../components/find-a-doc/find-a-doctor'


class App extends React.Component{
    render(){
        return ( 
        <div>

              <BrowserRouter>

                <Switch>
                    <Route path="/" component={LandingPage} exact/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/homepage" component={HomePage}/>
                    <Route path="/login" component={LoginPage} /> 
                </Switch>

            </BrowserRouter>

        </div>
    )}
}

export default App;