import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage'
import {Switch,Route, BrowserRouter} from "react-router-dom";
import FindADoc from '../components/find-a-doc/find-a-doctor'


class App extends React.Component{
    render(){
        return ( 
        <div>

             <BrowserRouter>

                <Switch>
                     <Route path="/" component={LandingPage} exact/>
                     <Route path="/" component={FindADoc} />
                    {/* <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/homepage" component={HomePage}/>   */}
                </Switch>

            </BrowserRouter>

        </div>
    )}
}

export default App;