import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import HomePage from '../components/HomePage/HomePage'
import SignUp from '../components/SignupPage/SignupPage';
import LoginPage from '../components/LoginPage/LoginPage'
import modal from '../components/modal/modal';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Symptoms from '../components/symptom/symptom';


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
                    <Route path="/symptom" component={Symptoms} />
                    <Route path="/modal" component={modal} />
                </Switch>

            </BrowserRouter>

        </div>
    )}
}

export default App;