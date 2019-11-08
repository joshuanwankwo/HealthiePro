import React, { Component } from 'react'
import './congratsModal.css';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

class CongratsModal extends Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        return ( 
            <div className= "congModalWrapper" >

<div className="cong-Modal-Content">

            <div className="cong-modal-success-Logo">
                     <img className="" src="./successfulLogo.png"  />
            </div>

<div className="cong-modal-writtenContent">
            <p>
                successful
            </p>

                    <p>
                        continue
                    </p>
</div>
    </div>
                    
        
            </div>
         );
    }
}
 
export default CongratsModal;