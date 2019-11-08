import React from 'react';
import Form from 'react-bootstrap/Form';
import './Button.css';

class Button extends React.Component{
    render(){
    
    return ( 
    
    <div className="Button-Parent">

        <button className="button" style={{background:this.props.bg ,width:this.props.width, height:this.props.height, marginTop:this.props.marginTop, marginLeft:this.props.marginLeft}}>
            {this.props.buttonName} <img className="arrow" src="./vector.png" width="10px" height="15px"  />
        </button>

    </div>

          )
        }           
    }

export default Button;