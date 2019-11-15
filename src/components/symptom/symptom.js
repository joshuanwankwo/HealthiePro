import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";
import './symptom.css';



class  Symptoms extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        symptoms: []
    };

}

componentDidMount(){
    // console.log('this.props', this.props)
    fetch("https://healthieapp.herokuapp.com/api/symptoms")
    .then(function (response) {
        return response.json();
    }).then((body) =>{
        this.setState({
            symptoms:body.data
        })
         })
    setTimeout(()=>console.log(this.state.symptoms[0].name), 3000)
    this.handleClick = this.handleClick.bind(this)
}


handleClick(event){
    
} 

    render(){

        const symptomss = this.state.symptoms.map((items)=>(
            <div style={{ backgroundImage:`url(${items.imgUrl})` }} className="symptom-card-con-1" onClick ={this.handleClick.bind()} key={items.id}><p>{items.name}</p></div>
        ));


        return (
            <div id="symptoms-con">
                <NavBar/>
                <div id="symptoms-intro-con">
                    <div id="symptoms-intro">
                        <p>
                            Identify your symptoms and be <br></br>referred for
                            the appropriate healthcare<br></br> provider for the
                            right treatments.
                       </p>
    
                    </div>
    
                    <div id="symptoms">
                        <p id="symptom-header">What are your Symptoms?</p>
                        <div>

                           {symptomss}

                        </div>
    
                      
    
                        <div id="symptoms-submit">
    
                            <Link to ="/selectSearchedDoctors">
                                <button>Submit</button> 
                            </Link> 
    
                        </div>
                    </div>
    
                </div>
    
    
            </div>
    
    
        )
    }
    
}

export default Symptoms;