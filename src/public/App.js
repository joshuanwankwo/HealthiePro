import React from 'react';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import HomePage from '../components/HomePage/HomePage'
import SignUp from '../components/SignupPage/SignupPage';
import LoginPage from '../components/LoginPage/LoginPage'
import Modal from '../components/modal/modal';
import BookDoc from '../components/BookDoc/BookDoc';
import Symptoms from '../components/Symptoms/Symptoms';
import FindADoctor from '../components/find-a-doc/find-a-doctor';



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
                    <Route path="/modal" component={Modal} /> 
                    <Route path="/symptoms" component={Symptoms} />
                </Switch>

            </BrowserRouter>

        </div>
    )}
}

export default App;