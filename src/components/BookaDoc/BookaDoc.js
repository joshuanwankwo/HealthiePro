// import React, {Component} from 'react';
// import './BookaDoc.css';
// import CongratsModal from '../congratsModal/congratsModal';


// class BookaDoc extends Component {
//     constructor(props){
//         super(props)
//         this.state = { 
//            display:false
//         }
//         this.handleModal = this.handleModal.bind(this)
//    }

//    handleModal(event){
//     event.preventDefault();
//       this.setState({display:true})
//       console.log("i clicked")
//    }


//    render() {   
//     return (

//         <div>

// <form id="bookDoc-form">



//                <div id="bookDoc-doc-info">
//                   <img src="./bookdoc-doc-info.svg" />
//                   <p>Request Appointment With Dr. Ifedili Joshua</p>
//                </div>
//                <div id="bookDoc-input-hospital">
//                   <input placeholder="New Heaven Hospital, Enugu" />
//                   <img src="./dropdown.svg" />
//                </div>
//                </form>

//                <form id="bookDoc-form">
                 

//                   <div id="bookDoc-input-schedule-con">
//                      <div id="bookDoc-input-date">
//                         <input placeholder="27 September 2019" />
//                         <img src="./calender.svg" />
//                      </div>
//                      <div id="bookDoc-input-time">
//                         <input placeholder="Select Time" />
//                         <img src="./dropdown.svg" />
//                      </div>
//                   </div>

//                   <div id="bookDoc-input-visit-ques">
//                      <input placeholder="Have Have You Visited This Hospital Before?" />
//                      <div>
//                         <button id="bookDoc-input-button1">Yes</button>
//                         <button id="bookDoc-input-button2">No</button>
//                      </div>
//                   </div>

//                   <div id="bookDoc-input-name">
//                      <input placeholder="Enter Your Name" />
//                   </div>

//                   <div id="bookDoc-input-phone-con">
//                      <div id="bookDoc-input-code">
//                         <input placeholder="Nigeria (+234)" />
//                         <img src="./dropdown.svg" />
//                      </div>
//                      <div id="bookDoc-input-phone">
//                         <input placeholder="Mobile Number" />
//                      </div>
//                   </div>

//                   <div id="bookDoc-input-email">
//                      <input placeholder="Email Address" />
//                   </div>


//                   <div id="bookDoc-input-schedule-con">
//                      <div id="bookDoc-input-date">
//                         <input placeholder="Select Your Age" />
//                      </div>
//                      <div id="bookDoc-input-time">
//                         <input placeholder="Gender" />
//                         <img src="./dropdown.svg" />
//                      </div>
//                   </div>



//                <button onClick={this.handleModal}  id="bookDoc-form-Submit">Submit</button>


//             </form>
       



//         </div>

//     )}
// }

// export default BookaDoc;